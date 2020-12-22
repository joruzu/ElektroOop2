import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {VakService} from "../vak.service";
import {Vak} from "../vak";

@Component({
  selector: 'app-create-vak',
  templateUrl: './create-vak.component.html',
  styleUrls: ['./create-vak.component.css']
})
export class CreateVakComponent implements OnInit {
  semesters = [1,2,3,4,5,6];
  orientaties = ['a', 'e', 'i', 't'];
  vak: Vak = new Vak();

  constructor(private router: Router,
              private vakService: VakService) { }

  ngOnInit(): void {
  }

  saveVak() {
    this.vakService.createVak(this.vak).subscribe(data => {
      console.log(data);
      this.goToVakList();
    }, error => console.log(error));
  }

  goToVakList() {
    this.router.navigate(['/vakken']);
  }

  onSubmit() {
    console.log(this.vak);
    this.saveVak()
  }
}
