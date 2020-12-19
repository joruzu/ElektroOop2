import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RapportService} from "../rapport.service";
import {Rapport} from "../rapport";

@Component({
  selector: 'app-student-rapport',
  templateUrl: './student-rapport.component.html',
  styleUrls: ['./student-rapport.component.css']
})
export class StudentRapportComponent implements OnInit {
  studid: number;
  rapporten: Rapport[];

  constructor(private route: ActivatedRoute,
              private rapportService: RapportService) { }

  ngOnInit(): void {
    this.studid = this.route.snapshot.params['studid'];
    this.getRapporten();
  }

  private getRapporten() {
    this.rapportService.getRapportenList().subscribe(data => {
      this.rapporten = data;
    })
  }

}
