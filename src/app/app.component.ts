import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

var pluralize = require('pluralize');

class Field {
  uuid: string;
  type: string;
  name: string;
  originalName: string;
  root: Field = null;
  bArray: boolean = false;
  constructor(_type: string, _name: string, _struct: Field, _bArray?: boolean) {
    this.originalName = _name;
    this.name = _name;
    this.type = _type;
    this.root = _struct;
    this.bArray = _bArray;
    this.uuid = generateUUID();
  }
  getPrefixedName(name?:string, pluralized?:boolean):string{
    if (!this.root){
      return this.name + (name ? name : '');
    }else{
      return (this.root.getPrefixedName((name ? name : ''), this.root.bArray && pluralized )) + (this.name ?  ( pluralized ? pluralize.singular(this.name) : this.name ) : '');
    }
  }
  getName(pluralized?:boolean){
    return (pluralized ? pluralize.singular(this.name) : this.name);
  }
  setArray(_bArray:boolean){
    this.bArray = _bArray;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  title = 'json2ue';
  generateType = 'Struct';
  optionsPrefixes = true;
  optionsSerializable = true;
  optionsBlueprintable = true;
  optionsPluralizable = true;

  fields: Array<Field> = [];
  className:string = '';

  @ViewChild('jsoneditor', {static: false }) jsonEditor : AceEditorComponent;
  
  @ViewChild('cppeditor', {static: false }) cppEditor : AceEditorComponent;
  
  ngAfterViewInit() {

    let cmp = this;
    this.jsonEditor.getEditor().setOptions({
      showLineNumbers: false,
      tabSize: 2,
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true,
      maxLines: Infinity
    });

    this.jsonEditor.mode = 'json';

    this.jsonEditor.registerOnChange(function(text){
      cmp.handleData(text);
      
    })

    this.jsonEditor.value =
`
{
  "users": [{
    "name": "John",
    "car" : {
      "name": "Skoda",
      "model": "Octavia",
      "cost": 12000
    },
    "points": 35.42,
    "deleted": false
  }]
}

`

    this.cppEditor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2,
      readOnly: true,
      maxLines: Infinity
 
    });

    this.cppEditor.mode = 'c_cpp';

    this.cppEditor.registerOnChange(function(text){
      
    })
    
    this.handleData(this.jsonEditor.value);
  }
  onClassNameChanged(val){
    
    this.className = val;

    this.handleData(this.jsonEditor.value);
  }

  onPrefixesToggle(val){
    this.optionsPrefixes = val;

    this.handleData(this.jsonEditor.value);
  }

  onSerializableToggle(val){
    this.optionsSerializable = val;

    this.handleData(this.jsonEditor.value);
  }

  onBlueprintableToggle(val){
    this.optionsBlueprintable = val;
    this.handleData(this.jsonEditor.value);
  }

  onPluralizableToggle(val){
    this.optionsPluralizable = val;
    this.handleData(this.jsonEditor.value);
  }

  handleData(data) {

    if(!IsJsonString(data)){
      console.error('not valid JSON');
      this.cppEditor.value = 'NOT VALID JSON';
      return false;
    }

    var obj = JSON.parse(data);

    this.fields = [];
    this.parse(obj);
    
    this.cppEditor.value = this.generateCPPValue();
    //this.cppEditor.value = ''; //this.parse(obj);
    //console.log('fields:', this.fields);
  }

  generateCPPValue():string{

    var text = '';
    var that = this;

    this.fields.forEach(function(field:Field){
      text = that.generateTextForField(field, text);
    });

    return text;
  }

  generateTextForField(field:Field, text: string):string{
    if (field.type == 'struct'){
      text = this.generateWrapperForStruct(field, text); 
    }
    return text;
  }

  generateWrapperForStruct(struct:Field, text: string):string{

    var fields = this.getFieldsWithStruct(struct);
    var fieldsContent = ``;
    var that = this;

    fields.forEach((field:Field)=>{
      fieldsContent += that.generateWrapperForField(field);
    });

    var wrapper:string = 
`
USTRUCT(${this.optionsBlueprintable ? 'BlueprintType' : ''})
struct F${ this.optionsPrefixes ? struct.getPrefixedName('', that.optionsPluralizable) : struct.getName(that.optionsPluralizable) }
{

  GENERATED_BODY()

${fieldsContent}

}
`;

    return wrapper + text;
  }

  generateWrapperForField(field:Field):string{
    if (field.type == 'struct'){
      if (field.bArray){
return `
  UPROPERTY(${this.optionsBlueprintable ? 'Blueprintable' : ''})
  TArray<F${this.optionsPrefixes ? field.getPrefixedName('', this.optionsPluralizable) : field.getName(this.optionsPluralizable)}> ${field.getName()};
`;
      }else{
return `
  UPROPERTY(${this.optionsBlueprintable ? 'Blueprintable' : ''})
  F${this.optionsPrefixes ? field.getPrefixedName('', this.optionsPluralizable) : field.getName(this.optionsPluralizable)} ${field.getName()};
`;
      }
    }
return `
  UPROPERTY(${this.optionsBlueprintable ? 'Blueprintable' : ''})
  ${field.type} ${field.getName()};
`;
  }

  getFieldsWithStruct(struct:Field):Array<Field>{
    var fields:Array<Field> = [];

    this.fields.forEach((field)=>{
      if (!field.root)
        return
      if (field.root.uuid == struct.uuid){
        fields.push(field);
      }
    })

    return fields;
  }

  pushUnique(field: Field){
    if (field.root){
      var bDuplicated = false;
      this.fields.forEach((item)=>{
        if ((item.root == field.root) && (item.originalName == field.originalName)){
          bDuplicated = true;
        }
      });

      if (bDuplicated){
        return;
      }
    }
    this.fields.push(field);
  }

  parse(val: any, name?: string, struct?: Field, bArray?:boolean) {

    if (val instanceof Object) {
      var newField : Field;

      if (!name && !struct){
        newField = new Field('struct', `${this.className ? capitalize(this.className) : `My${this.generateType}`}`, null);
      }else{
        newField = new Field('struct', ''+capitalize(name), struct, bArray);
      }
      
      this.pushUnique(newField);

      for (let key in val) {
        let value = val[key];
        if (Array.isArray(value)) {
          // var arrayField = new Field('struct', capitalize(key), newField, true);
          // this.fields.push(arrayField);

          var cmp = this;

          value.forEach(function(item){
            cmp.parse(item, capitalize(key), newField, true);
          })

        } else {
          this.parse(value, key, newField);
        }
      }


      //text = this.generateStructWrapper(text, name);
    } else {
      this.parseOneField(val, name, struct);
    }

  }

  parseOneField(field: any, name?: string, struct?: Field){
    var text: string = "";
    var type: string = "";

    if (typeof field === 'string') {
      type = "FString";
    } else
      if (typeof field === 'number') {
        if (field % 1 === 0) {
          type = "int32";
        } else {
          type = "float";
        }
      } else
        if (typeof field === 'boolean') {
          type = "bool"
        } else {
          console.error('NOT UNDESTANDABLE TYPE!');
          return "";
        }
    

    var newField = new Field(type, capitalize(name), struct);
    this.fields.push(newField);

    //return text;
  }

  generateStructWrapper(body: string, fieldname?: string): string {

    var text: string = ``;
    var className: string = ``;

    if (!fieldname){
      className = `F${this.className ? capitalize(this.className) : `My${this.generateType}Name`}`;
    }else{
      className = `F${capitalize(fieldname)}`;
    }
    

    text += `
// AUTOGENERATED
USTRUCT(${this.optionsBlueprintable ? 'BlueprintType' : ''})
struct ${className}
{

  GENERATED_BODY()

  ${body}

  ${className}(FString JsonString){

    TSharedRef<TJsonReader<>> Reader = TJsonReaderFactory<>::Create(Response->GetContentAsString());
    
    if (FJsonSerializer::Deserialize(Reader, JsonObject))
    {
      ${this.getBodyParser()}
      int32 recievedInt = JsonObject->GetIntegerField("customInt");

      GEngine->AddOnScreenDebugMessage(1, 2.0f, FColor::Green, FString::FromInt(recievedInt));

    }

  }

}


`;

    return text;

  }

  getBodyParser():string{
    return 'BODY';
  }
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function IsJsonString(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if(d > 0){//Use timestamp until depleted
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {//Use microseconds since page-load if supported
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}