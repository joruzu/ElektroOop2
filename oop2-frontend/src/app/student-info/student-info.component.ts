import { Component, OnInit } from '@angular/core';
import {Student} from "../student";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  studid: number;
  student: Student;

  constructor(private route: ActivatedRoute,
              private studentService: StudentService,
              private router: Router) { }

  ngOnInit(): void {
    this.studid = this.route.snapshot.params['studid'];
    this.student = new Student();
    this.studentService.getStudentById(this.studid).subscribe(data =>{
      this.student = data;
    })
  }

  goToUpdateStudent() {
    this.router.navigate(['studenten', this.studid, 'update-student']);
  }

  goToStudentList() {
    this.router.navigate(['studenten']);
  }

  goToStudentRapport(studid: number) {
    this.router.navigate(['studenten', studid, 'rapport']);
  }

  deleteStudent(studid: number, voornaam: string, achternaam: string) {
    if(confirm("Are you sure you want to delete student: " + studid + " " + voornaam + " " + achternaam + "?\n" +
      "(Please make sure there are no entries in this student's rapport before deleting)")) {
      this.studentService.deleteStudent(studid).subscribe(data => {
        console.log(data);
        this.goToStudentList();
      });
    }
  }

}
