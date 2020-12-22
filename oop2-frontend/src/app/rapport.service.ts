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

  getRapportenList(student: string, jaar: string, vak: string): Observable<Rapport[]> {
    if(student=="" && jaar=="" && vak=="") {
      return this.httpClient.get<Rapport[]>(`${this.rapportURL}`);
    }
    else if(student!="" && jaar!="") {
      return this.httpClient.get<Rapport[]>(`${this.rapportURL}?student=${student}&jaar=${jaar}`);
    }
    else if(vak!="" && jaar!="") {
      return this.httpClient.get<Rapport[]>(`${this.rapportURL}?vak=${vak}&jaar=${jaar}`);
    }
    else if(student!="" && jaar=="") {
      return this.httpClient.get<Rapport[]>(`${this.rapportURL}?student=${student}`);
    }
    else if(jaar!="" && student=="") {
      return this.httpClient.get<Rapport[]>(`${this.rapportURL}?jaar=${jaar}`);
    }
    else if(vak!="" && jaar=="") {
      return this.httpClient.get<Rapport[]>(`${this.rapportURL}?vak=${vak}`);
    }
    else if(jaar!="" && vak=="") {
      return this.httpClient.get<Rapport[]>(`${this.rapportURL}?jaar=${jaar}`);
    }

  }

  createRapport(studid: number, vakid: number, datum: string, cijfer: number): Observable<Object> {
    return this.httpClient.post(`${this.rapportURL}?studid=${studid}&vakid=${vakid}&datum=${datum}&cijfer=${cijfer}`, "");
  }

  deleteRapport(rapportid: number): Observable<Object> {
    return this.httpClient.delete(`${this.rapportURL}/${rapportid}`)
  }
}
