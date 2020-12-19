import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rapport} from "./rapport";

@Injectable({
  providedIn: 'root'
})
export class RapportService {
  private rapportURL = "http://localhost:8080/rapport";

  constructor(private httpClient: HttpClient) { }

  getRapportenList(): Observable<Rapport[]> {
    return this.httpClient.get<Rapport[]>(`${this.rapportURL}`);
  }
}
