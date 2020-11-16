import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerGamesService } from 'src/app/services/player-games.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  
  addPlayerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private playerService:PlayerGamesService,
    private router:Router) { }

  ngOnInit(): void {
    this.addPlayerForm = this.formBuilder.group({
      name: ['', Validators.minLength(2)],
      position: [''],
      date: [''],
      image: ['']
      
    })
  }
  
  addPlayer(player:any){
    console.log('this is the match add',player);
    this.playerService.addplayer(player).subscribe(
      () => {
        console.log('added player successfully');
        this.router.navigate(['players']);
      }
    )
  }

}
