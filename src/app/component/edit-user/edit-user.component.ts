import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id:any;
  user:any;
  editUserForm:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private formBuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.editUserForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      pwd: [''],
      confirmPwd: [''],
      tel: ['']
    });
    this.userService.getUserById(this.id).subscribe(
      data => {
        this.user = data;
      }
    
    )}
    validateEdit() {
      console.log('this is the match add',this.user);

      this.userService.editUser(this.user).subscribe(
        () => {
          console.log('edited');
          this.router.navigate(['admin']);

        }
      )
    }
}
