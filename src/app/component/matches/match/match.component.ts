import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
// Entrée nommée x
@Input() matchInput:any;

  constructor() { }

  ngOnInit(): void {
    
  }

  resultScore(a:number, b:number) {
    if (a>b) {
      return('win');
    }else if (a<b) {
      return ('loss');
      
    }
    else{
      return('draw');
    }
  }

  //selonune valeur faire un traitement
  matchColor(value:string){
    switch (value) {
      case 'win': return 'green';
      case 'loss': return 'red';
      case 'draw': return 'blue';
    
    }
  }
}
