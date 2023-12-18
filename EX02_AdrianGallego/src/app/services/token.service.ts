import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public saveToken(token : string) : void{
    window.sessionStorage.removeItem('auth-token');
    window.sessionStorage.setItem('auth-token', token);
  }

  public getToken() : string | null {
    return window.sessionStorage.getItem('auth-token');
  }
}
