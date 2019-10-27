import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DialogDataExampleDialog } from './app.component';

import { AceEditorModule } from 'ng2-ace-editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DialogDataExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AceEditorModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [ DialogDataExampleDialog ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
