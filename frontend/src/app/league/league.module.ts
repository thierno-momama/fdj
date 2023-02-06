import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueRoutingModule } from './league-routing.module';
import { LeagueComponent } from './components/league/league.component';
import { TeamComponent } from './components/team/team.component';
import { PlayerComponent } from './components/player/player.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    LeagueComponent,
    TeamComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    LeagueRoutingModule,
    MatGridListModule,
    SharedModule,
    FormsModule
  ]
})
export class LeagueModule { }
