import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
id:any;
  //1- declarer lobjet JSON 
Match: any ;
//2-declarer le formGroup
editMatchForm: FormGroup;
//3-dclarer le formBuilder qui construit le formgroup 
  constructor(private formBuilder: FormBuilder,
    private matchService:MatchService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.editMatchForm = this.formBuilder.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: ['']
    });
    this.matchService.getMatchById(this.id).subscribe(
      data=>{
        this.Match=data;
      }
    )
  }
  editMatch(){
    console.log('this is the match add',this.Match);
   this.matchService.editMatch(this.Match).subscribe(
     ()=>{
       console.log('tbadel');
       this.router.navigate(['admin']);
     }
   )
  }
}
