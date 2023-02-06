import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit{
  players: any;
  allPlayers: any[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.players = Object.values(history.state)[0];
    this.players = this.players.toString().split(',');
    console.log("PLayers form teams : ", this.players);

    this.dataService.getAllPlayers().subscribe((data: any) => {
      console.log("All players", data);
      this.allPlayers = data;
    })
  }
  

  

}
