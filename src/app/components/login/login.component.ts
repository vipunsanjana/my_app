import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { User } from '../../../utils/interfaces/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  heading = "Sign In";
  field = true;
  url = "";
email: string = "";
password: string = "";
submitted: boolean = false;

constructor(private authService: AuthService, private router: Router){

}

  changeImgUrl(){
    this.url = "";
  }

//   handleClick = () => {
//  this.field = this.field ? false : true;
//   }

  handleClick = () => {
 this.field = this.field ? false : true;
  }

  handleSubmit(){
    this.submitted = true;
    // alert("email : " + this.email + "\n\n" + "password : " + this.password);
    console.log("email : " + this.email + "\n\n" + "password : " + this.password);

    this.authService.authenticate(this.email,this.password).then((result:User[]) => {

        console.log(result);
        const user = result.find((item: User) => item.username === this.email);
        if (user != undefined) {
          if (user.password === this.password) {
              alert("login successful!");
              console.log(user);
              localStorage.setItem("user",JSON.stringify(user));
              this.router.navigate(["/profile"]);
          } else {
              alert("invalid password!");
          }
      } else {
          alert("user not found!");
      }
      
      }

    ).catch(error =>{

        console.log(error);

  });
    
   
  }

}
