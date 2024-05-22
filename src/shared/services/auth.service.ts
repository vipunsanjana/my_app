import { Injectable } from '@angular/core';
import { User } from '../../utils/interfaces/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "http://localhost:3000";
  _loggedin : BehaviorSubject<boolean>


  constructor(){
    this._loggedin = new BehaviorSubject<boolean>(false);
    }


    get isloggedin():BehaviorSubject<boolean>{
      return this._loggedin;
    }
setisloggedin(){
  this._loggedin.next(true);
}

logout(){
  this._loggedin.next(false);
}

  async authenticate(email: string, password:string):Promise<User[]>{

    const data = await fetch(`${this.baseUrl}/users`);
    return await data.json() ?? [];


  }

}
