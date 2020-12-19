import {Component, OnInit} from '@angular/core';
import {Student} from "../student";
import {StudentService} from "../student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[];
  searchTerm: string;
  studiestatussen = ['any', 'Actief', 'Inactief', 'Voldaan'];
  status: string = 'any';
  orientaties = ['all' ,'telecommunicatie', 'informatica', 'Energietechniek'];
  orientatie: string = 'all';

  constructor(private studentService: StudentService,
              private router: Router) { }

  ngOnInit(): void {
    this.getStudents("");
  }

  onSearchTermChange() {
    this.getStudents(this.searchTerm);
  }

  private getStudents(search: string) {
    this.studentService.getStudentsList(search).subscribe(data => {
      this.students = data;
    })
  }

  goToStudentInfo(studid: number) {
    this.router.navigate(['studenten', studid, 'info']);
  }

  goToStudentRapport(studid: number) {
    this.router.navigate(['studenten', studid, 'rapport'])
  }
}
