import { Component, OnInit } from '@angular/core';
import {Rapport} from "../rapport";
import {Vak} from "../vak";
import {Student} from "../student";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../student.service";
import {VakService} from "../vak.service";
import {RapportService} from "../rapport.service";

@Component({
  selector: 'app-create-rapport-vak',
  templateUrl: './create-rapport-vak.component.html',
  styleUrls: ['./create-rapport-vak.component.css']
})
export class CreateRapportVakComponent implements OnInit {
  rapport: Rapport = new Rapport();
  vakid: number;
  vak: Vak = new Vak();
  studid: number;
  student: Student = new Student();
  exists: boolean = true;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private studentService: StudentService,
              private rapportService: RapportService,
              private vakService: VakService) { }

  ngOnInit(): void {
    this.vakid = this.route.snapshot.params['vakid'];
    this.vakService.getVakById(this.vakid).subscribe(data => {
      this.vak = data;
    });
  }

  saveRapport() {
    this.rapportService.createRapport(this.studid, this.vakid, this.rapport.datum, this.rapport.cijfer).subscribe(data => {
      console.log(data);
      this.goToVakRapport();
    }, error => console.log(error));
  }

  goToVakRapport() {
    this.router.navigate(['vakken', this.vakid, 'rapport']);
  }

  checkExist() {
    this.studentService.getStudentById(this.studid).subscribe(data => {
      this.student = data;
      this.exists = true;
    }, error => {
      console.log(error);
      this.exists = false;
    });
  }

  onSubmit() {
    console.log(this.studid, this.vakid, this.rapport.datum, this.rapport.cijfer);
    this.saveRapport()
  }

}
