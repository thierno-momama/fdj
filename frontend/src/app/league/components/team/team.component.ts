import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{

  @Input() team!: any;
  @Input() search!: string;

  constructor(private router: Router){

  }

  ngOnInit(): void {
    // console.log(this.team.name, this.team.players);
    console.log("Search Ligue", this.search)
  }

  goToPlayer(){
    this.router.navigateByUrl('/player', { state: this.team.players});
  }

 

}
