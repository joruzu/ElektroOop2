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
  semester: number = 0;
  semesters = [1,2,3,4,5,6];
  orientatie: string = 'any';
  orientaties = ['any', 'a', 'e', 'i', 't'];

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
    this.router.navigate(['vakken', vakid, 'rapport']);
  }

  goToAddVak() {
    this.router.navigate(['vakken/add-vak']);
  }

  goToUpdateVak(vakid: number) {
    this.router.navigate(['vakken', vakid, 'update-vak']);
  }

  deleteVak(vakid: number, vaknaam: string) {
    if(confirm("Are you sure you want to delete vak: " + vaknaam + "?\n" +
      "(Please make sure the cijferlijst is empty before deleting)" )) {
      this.vakService.deleteVak(vakid).subscribe(data => {
        console.log(data);
        this.getVakken();
      });
    }
  }

}
