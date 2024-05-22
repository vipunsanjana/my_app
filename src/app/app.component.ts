import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_app';


  isloggedin: boolean = false;

  constructor(private authComp: AuthService,private router:Router){
    authComp.isloggedin.subscribe(arg => this.isloggedin = arg);
    
  }

  handlelogout(){
    this.authComp.logout();
    
  }

}
