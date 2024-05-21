import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  heading : string = "Sign -Up";


  constructor(){}

  myRegForm = new FormGroup({
    firstName : new FormControl("Your first Name"),
    lastName : new FormControl("Your last Name"),
    nic : new FormControl("Your nic"),
    gender : new FormControl(""),
    email : new FormControl("Your email"),
    password : new FormControl("Your password"),
  })

  handleSubmit(){
    console.log("first");
    console.log(this.myRegForm.value);
  }

}
