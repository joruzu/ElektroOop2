import { Component, OnInit } from '@angular/core';
import {Vak} from "../vak";
import {ActivatedRoute, Router} from "@angular/router";
import {VakService} from "../vak.service";

@Component({
  selector: 'app-update-vak',
  templateUrl: './update-vak.component.html',
  styleUrls: ['./update-vak.component.css']
})
export class UpdateVakComponent implements OnInit {
  semesters = [1,2,3,4,5,6];
  orientaties = ['a', 'e', 'i', 't'];
  vak: Vak = new Vak();
  vakid: number;

  constructor(private router: Router,
              private vakService: VakService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.vakid = this.route.snapshot.params['vakid'];
    this.vakService.getVakById(this.vakid).subscribe(data => {
      this.vak = data;
    }, error => console.log(error));
  }

  goToVakList() {
    this.router.navigate(['/vakken']);
  }

  onSubmit(){
    this.vakService.updateVak(this.vakid, this.vak).subscribe(data => {
      this.goToVakList();
    }, error => console.log(error))
  }
}
