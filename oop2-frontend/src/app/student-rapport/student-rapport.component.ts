import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RapportService} from "../rapport.service";
import {Rapport} from "../rapport";
import {StudentService} from "../student.service";
import {Student} from "../student";

@Component({
  selector: 'app-student-rapport',
  templateUrl: './student-rapport.component.html',
  styleUrls: ['./student-rapport.component.css']
})
export class StudentRapportComponent implements OnInit {
  studid: number;
  rapporten: Rapport[];
  student: Student = new Student();
  vakSearch: string = "";
  jaarSearch: string = "";
  semester: number = 0;
  semesters = [1,2,3,4,5,6];

  constructor(private route: ActivatedRoute,
              private rapportService: RapportService,
              private studentService: StudentService,
              private router: Router) { }

  ngOnInit(): void {
    this.studid = this.route.snapshot.params['studid'];
    this.studentService.getStudentById(this.studid).subscribe(data => {
      this.student = data;
    });
    this.getRapporten("", "", "");
  }

  onVakSearchChange(newvalue) {
    this.vakSearch = newvalue;
    this.getRapporten("", this.jaarSearch, this.vakSearch);
  }

  onJaarSearchChange(newvalue) {
    this.jaarSearch = newvalue;
    this.getRapporten("", this.jaarSearch, this.vakSearch);
  }

  private getRapporten(student: string, jaar: string, vak: string) {
    this.rapportService.getRapportenList(student, jaar, vak).subscribe(data => {
      this.rapporten = data;
    });
  }

  goToStudentInfo(studid: number) {
    this.router.navigate(['studenten', studid, 'info']);
  }

  deleteRapport(rapportid: number) {
    if(confirm("Are you sure you want to delete?")) {
      this.rapportService.deleteRapport(rapportid).subscribe(data => {
        console.log(data);
        this.getRapporten("", this.jaarSearch, this.vakSearch);
      });
    }
  }

}
