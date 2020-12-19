import { Component, OnInit } from '@angular/core';
import {VakService} from "../vak.service";
import {Router} from "@angular/router";
import {Vak} from "../vak";

@Component({
  selector: 'app-vak-list',
  templateUrl: './vak-list.component.html',
  styleUrls: ['./vak-list.component.css']
})
export class VakListComponent implements OnInit {
  vakken: Vak[];

  constructor(private vakService: VakService,
              private router: Router) { }

  ngOnInit(): void {
    this.getVakken();
  }

  private getVakken() {
    this.vakService.getVakkenList().subscribe(data => {
      this.vakken = data;
    });
  }

  goToVakRapport(vakid: number) {
    this.router.navigate(['vakken', vakid, 'rapport'])
  }
}
