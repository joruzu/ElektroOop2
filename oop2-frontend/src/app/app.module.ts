import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentRapportComponent } from './student-rapport/student-rapport.component';
import { VakListComponent } from './vak-list/vak-list.component';
import { VakRapportComponent } from './vak-rapport/vak-rapport.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    StudentInfoComponent,
    UpdateStudentComponent,
    StudentRapportComponent,
    VakListComponent,
    VakRapportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
