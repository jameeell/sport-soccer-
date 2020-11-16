import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  //variable global
  // var matches qui va prendre un ensemble d'objets
  // variable globale
  // non déclarée dans une fonction
  // utilsable dans toute la classe
  // précédée par this
 
 allMatches:any;
  constructor(private matchService:MatchService) { }
//ngONInit() une fonction qui sera éxecuté auto  lors le lancement du component
  ngOnInit()  {
  this.matchService. getAllMatches().subscribe(
    data =>{
      this.allMatches =data;
    }
  )
 
}
}