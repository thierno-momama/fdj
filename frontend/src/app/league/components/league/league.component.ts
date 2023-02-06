import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/search.service';
import { DataService } from '../../services/data.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit, OnDestroy{
  teams: any[] = [];
  searchLigue: string = '';
  leagueTeams: any[] = [];

  subscription = new Subscription();

  constructor(private dataService: DataService, private searchService: SearchService){}

  ngOnInit(): void {
    this.dataService.getAllLeagues().subscribe((data: any) => {
      console.log("Leagues:", data)
    });
    this.subscription = this.dataService.getAllTeams().subscribe((data: any) => {
      this.teams = data;
    });
    this.dataService.getAllPlayers().subscribe((data: any) => {
      console.log("Players:", data)
    });
  }

  searchLeague(search: string){
    this.dataService.getAllLeagues().subscribe((data: any) => {
      const league = data.find((c: any) => c.name.toLowerCase().includes(search.toLowerCase()));
     console.warn(league.name)
     
      this.leagueTeams = Object.values(league.teams);
      this.leagueTeams = this.leagueTeams.toString().split(',');
      console.log("PLayers form teams : ", this.leagueTeams);
      this.searchService.setLeagues(league);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
