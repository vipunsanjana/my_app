import { Injectable } from '@angular/core';
import { User } from '../../utils/interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "http://localhost:3000";

  constructor() { }

  async authenticate(email: string, password:string):Promise<User[]>{

    const data = await fetch(`${this.baseUrl}/users`);
    return await data.json() ?? [];


  }

}
