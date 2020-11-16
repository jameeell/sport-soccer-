import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  id:any;
user:any;
  constructor(private activateRoute:ActivatedRoute,
    private userService:UserService) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id).subscribe(
      (data) =>{
        console.log('data',data);
        this.user= data;
      }
    )
  }

}
