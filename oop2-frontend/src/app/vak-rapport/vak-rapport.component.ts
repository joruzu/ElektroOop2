import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RapportService} from "../rapport.service";
import {Rapport} from "../rapport";
import {VakService} from "../vak.service";
import {Vak} from "../vak";

@Component({
  selector: 'app-vak-rapport',
  templateUrl: './vak-rapport.component.html',
  styleUrls: ['./vak-rapport.component.css']
})
export class VakRapportComponent implements OnInit {
  vakid: number;
  rapporten: Rapport[];
  vak: Vak;

  constructor(private route: ActivatedRoute,
              private rapportService: RapportService,
              private vakService: VakService) { }

  ngOnInit(): void {
    this.vakid = this.route.snapshot.params['vakid'];
    this.getRapporten();
    this.vakService.getVakById(this.vakid).subscribe(data => {
      this.vak = data;
    })
  }

  private getRapporten() {
    this.rapportService.getRapportenList().subscribe(data => {
      this.rapporten = data;
    })
  }
}
