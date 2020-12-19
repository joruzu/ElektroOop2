import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from "./student-list/student-list.component";
import {CreateStudentComponent} from "./create-student/create-student.component";
import {StudentInfoComponent} from "./student-info/student-info.component";
import {UpdateStudentComponent} from "./update-student/update-student.component";
import {StudentRapportComponent} from "./student-rapport/student-rapport.component";
import {VakListComponent} from "./vak-list/vak-list.component";
import {VakRapportComponent} from "./vak-rapport/vak-rapport.component";

const routes: Routes = [
  {path: 'studenten', component: StudentListComponent},
  {path: '', redirectTo: 'studenten', pathMatch: 'full'},
  {path: 'add-student', component: CreateStudentComponent},
  {path: 'studenten/:studid/info', component: StudentInfoComponent},
  {path: 'studenten/:studid/update-student', component: UpdateStudentComponent},
  {path: 'studenten/:studid/rapport', component: StudentRapportComponent},
  {path: 'vakken', component: VakListComponent},
  {path: 'vakken/:vakid/rapport', component: VakRapportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
