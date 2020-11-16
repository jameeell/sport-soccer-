import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerGamesService } from 'src/app/services/player-games.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  id: any;
  player: any;
  editPlayerForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerGamesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.editPlayerForm = this.formBuilder.group({
      name: [''],
      date: [''],
      position: [''],
      image: [''],
    });
    this.playerService.getPlayerById(this.id).subscribe(
      data => {
        this.player = data;
      }
    )
  }
  validateEdit() {
    this.playerService.editPlayer(this.player).subscribe(
      () => {
        console.log('edited');
        this.router.navigate(['admin']);

      }
    )
  }
}
