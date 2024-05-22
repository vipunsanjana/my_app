import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isloggedin: boolean = false;

  constructor(private authComp: AuthService){
    authComp.isloggedin.subscribe(arg => this.isloggedin = arg);
    
  }

}
