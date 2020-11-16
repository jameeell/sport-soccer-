import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  id:any;
  match:any;
    constructor(private activateRoute:ActivatedRoute,
      private matchService:MatchService) { }
  
    ngOnInit(): void {
      this.id = this.activateRoute.snapshot.paramMap.get('id');
      this.matchService.getMatchById(this.id).subscribe(
        (data) =>{
          console.log('data',data);
          this.match= data;
        }
      )
    }
  
  }
  