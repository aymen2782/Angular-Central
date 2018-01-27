import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BindingComponent } from './binding/binding.component';
import { DivcolorComponent } from './divcolor/divcolor.component';
import { TwowayComponent } from './twoway/twoway.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CvComponent } from './cv/cv.component';
import { ListCvComponent } from './list-cv/list-cv.component';
import { CvItemComponent } from './cv-item/cv-item.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { TodoComponent } from './todo/todo.component';
import {TodoService} from "./todo.service";

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    Compo2Component,
    InterpolationComponent,
    BindingComponent,
    DivcolorComponent,
    TwowayComponent,
    CvCardComponent,
    CvComponent,
    ListCvComponent,
    CvItemComponent,
    NgstyleComponent,
    NgclassComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
