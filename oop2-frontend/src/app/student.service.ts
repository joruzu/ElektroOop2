import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "./student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentURL = "http://localhost:8080/students";

  constructor(private httpClient: HttpClient) { }

  getStudentsList(search: string): Observable<Student[]> {
    if(search == ""){
      return this.httpClient.get<Student[]>(`${this.studentURL}`);
    }
    else {
      return this.httpClient.get<Student[]>(`${this.studentURL}?search=${search}`);
    }
  }

  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.studentURL}/${id}`);
  }

  createStudent(student: Student): Observable<Object> {
    return this.httpClient.post(`${this.studentURL}`, student);
  }

  updateStudent(studid: number, student: Student): Observable<Object> {
    return this.httpClient.put(`${this.studentURL}/${studid}`, student);
  }
}
