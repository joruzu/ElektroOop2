import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RapportService} from "../rapport.service";
import {Rapport} from "../rapport";
import {VakService} from "../vak.service";
import {Vak} from "../vak";
import {element} from "protractor";

@Component({
  selector: 'app-vak-rapport',
  templateUrl: './vak-rapport.component.html',
  styleUrls: ['./vak-rapport.component.css']
})
export class VakRapportComponent implements OnInit {
  vakid: number;
  rapporten: Rapport[];
  vak: Vak = new Vak();
  studentSearch: string = "";
  jaarSearch: string = "";

  constructor(private route: ActivatedRoute,
              private rapportService: RapportService,
              private vakService: VakService,
              private router: Router) { }

  ngOnInit(): void {
    this.vakid = this.route.snapshot.params['vakid'];
    this.getRapporten("", "", "");
    this.vakService.getVakById(this.vakid).subscribe(data => {
      this.vak = data;
    });
  }

  onStudentSearchChange(newvalue) {
    this.studentSearch = newvalue;
    this.getRapporten(this.studentSearch, this.jaarSearch, "");
  }

  onJaarSearchChange(newvalue) {
    this.jaarSearch = newvalue;
    this.getRapporten(this.studentSearch, this.jaarSearch, "");
  }

  private getRapporten(student: string, jaar: string, vak: string) {
    this.rapportService.getRapportenList(student, jaar, vak).subscribe(data => {
      this.rapporten = data;
    });
  }

  goToCreateRapportVak(vakid: number) {
    this.router.navigate(['vakken', vakid, 'rapport', 'add-rapport']);
  }

  deleteRapport(rapportid: number) {
    if(confirm("Are you sure you want to delete?")) {
      this.rapportService.deleteRapport(rapportid).subscribe(data => {
        console.log(data);
        this.getRapporten(this.studentSearch, this.jaarSearch, "");
      });
    }
  }

}
