import { Component, OnInit } from '@angular/core';
import { User } from '../../../utils/interfaces/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{


  user: User | undefined;

  ngOnInit(): void {
    let str = localStorage.getItem("user");

    this.user = str ? JSON.parse(str) : undefined;
  }

}
