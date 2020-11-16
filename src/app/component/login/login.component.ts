import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = {};
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      
      Email: [''],
      pwd: ['']
  })

} 

loginFn(Email: String, pwd: Number){
if(this.loginForm.value.Email===''){ alert ('email does not exist!');}
if(this.loginForm.value.pwd===''){ alert ('password does not exist!');}
}

//  addLogin(){
//    console.log('here my login object',this.login.Email)
//    alert ('boutton cliked');
//  }
}