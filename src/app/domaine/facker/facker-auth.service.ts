import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class FackerAuthService {
  login(username: string, password: string): boolean {
    if(username ==='admin123' && password === '123') {
      const fakeToken = 'fake-jwt-token';
      localStorage.setItem('token', fakeToken);
      return true;
    }
    return false;
  }
}
