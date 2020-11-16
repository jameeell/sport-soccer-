import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

//1- declarer lobjet JSON 
Match: any = {};
//2-declarer le formGroup
matchForm: FormGroup;
//3-dclarer le formBuilder qui construit le formgroup 
  constructor(private formBuilder: FormBuilder,
    private matchService:MatchService,
    private router:Router) { }

  ngOnInit(): void {
    this.matchForm = this.formBuilder.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: ['']
    })
  }
  addMatchs(){
    console.log('this is the match add',this.Match);
    //addmatch jobnaha match.servise .ts ligne17
this.matchService.addMatch(this.Match).subscribe(
  ()=>{
    console.log('match added successfuly');
    this.router.navigate(['matches']);
  }
)
  }
}
