import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'json2ue';

  @ViewChild('jsoneditor', {static: false }) jsonEditor : AceEditorComponent;

  ngAfterViewInit() {

    this.jsonEditor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2
    });

    this.jsonEditor.mode = 'json';
    this.jsonEditor.value = 
`{
  "somebody": "was told me"
}`;

    this.jsonEditor.getEditor().commands.addCommand({
      name: "showOtherCompletions",
      bindKey: "Ctrl-.",
      exec: function (editor) {

      }
    });

    this.jsonEditor.registerOnChange(function(text){
      console.log(`CHANGED! ${text}`);
    })

  }

  onContentChanged(val) {

  }
}
