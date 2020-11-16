import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerGamesService } from 'src/app/services/player-games.service';
import { PlayerComponent } from '../players/player/player.component';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
id:any;
player:any;
  constructor(private activateRoute:ActivatedRoute,
    private playerService:PlayerGamesService) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe(
      (data) =>{
        console.log('data',data);
        this.player= data;
      }
    )
  }

}
