import { Component } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  heading : string = "Sign -Up";


  constructor(private formBuilder: FormBuilder){}


  myRegForm = this.formBuilder.group({
    firstName: ["First Name",Validators.required],
    lastName: ["Last Name"],
    nic: ["NIC"],
    gender: ["Gender"],
    email: ["E-mail"],
    password: ["Password",Validators.maxLength(3)],
  })

  handleSubmit(){
    console.log("first");
    console.log(this.myRegForm.value);
  }

}
