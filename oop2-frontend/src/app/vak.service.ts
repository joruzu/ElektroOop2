import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vak} from "./vak";

@Injectable({
  providedIn: 'root'
})
export class VakService {
  private vakURL = "http://localhost:8080/vak"

  constructor(private httpClient: HttpClient) { }

  getVakkenList(): Observable<Vak[]> {
    return this.httpClient.get<Vak[]>(`${this.vakURL}`);
  }

  getVakById(id: number): Observable<Vak> {
    return this.httpClient.get<Vak>(`${this.vakURL}/${id}`);
  }

  createVak(vak: Vak): Observable<Object> {
    return this.httpClient.post(`${this.vakURL}`, vak);
  }

  updateVak(vakid: number, vak: Vak): Observable<Object> {
    return this.httpClient.put(`${this.vakURL}/${vakid}`, vak);
  }

  deleteVak(vakid: number): Observable<Object> {
    return this.httpClient.delete(`${this.vakURL}/${vakid}`);
  }
}
