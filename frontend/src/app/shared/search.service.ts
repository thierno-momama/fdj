import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  leagues = new Subject();

  constructor() { }

  setLeagues(league: string){
    this.leagues.next(league);
  }
  
  getLeagues(): Observable<any> {
    return this.leagues.asObservable();
  }
}
