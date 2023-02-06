import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = "http://localhost:5000/api/v1";

  constructor(private http: HttpClient) { }

  getAllLeagues(): Observable<any[]>{
    return this.http.get<any>(`${this.url}/leagues`);
  }

  getAllTeams(): Observable<any[]>{
    return this.http.get<any>(`${this.url}/teams`);
  }

  getAllPlayers(): Observable<any[]>{
    return this.http.get<any>(`${this.url}/players`);
  }
}
