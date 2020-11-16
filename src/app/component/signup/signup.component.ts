import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MustMatch } from 'src/app/validators/comparePwd';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router:Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(3),Validators.required]],
      lastName: [''],
      email: ['', [Validators.email,Validators.required]],
      pwd: ['', Validators.minLength(2)],
      confirmPwd: [''],
      tel: ['']
    },
    {
      validator: MustMatch('pwd','confirmPwd')
    })
  }

  signup(user:any) {
    console.log('user ',user);
    
  this.userService.addUser(user).subscribe(
    ()=>{
      this.router.navigate(['admin']);
    }
  )
  }

}