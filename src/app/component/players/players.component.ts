import { Component, OnInit } from '@angular/core';
import { PlayerGamesService } from 'src/app/services/player-games.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  allPlayers: any;
  constructor(private playerService: PlayerGamesService) { }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(
      data => {
        this.allPlayers = data;
      }
    )
  }
  display(obj: any, x: string) {
    return (obj.position === x);
  }


}
