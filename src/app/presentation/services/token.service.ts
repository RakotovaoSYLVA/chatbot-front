import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class TokenService {
  private readonly tokenKey = 'token';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  setToken(token: string): void {
    if (this.isBrowser) {
      localStorage.setItem(this.tokenKey, token);
    }
  }

  getToken(): string | null {
    console.log('ato amin getToken', this.tokenKey);
    return this.isBrowser ? localStorage.getItem(this.tokenKey) : null;
  }

  clearToken(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.tokenKey);
    }
  }

  decodeToken(): any | null {
    const token = this.getToken();
    if (!token) {
      console.log('Aucun token trouve');
      return null;
    }

    try {
      const payload = jwtDecode(token);
      console.log('decode', payload);
      return payload;
    } catch (error) {
      console.error('Erreur lors du décodage du token JWT:', error);
      return null;
    }
  }

  getUserRole(): string | null {
    const decoded = this.decodeToken();
    return typeof decoded?.role === 'string' ? decoded.role : null;
  }

  isLoggedIn(): boolean {
    if (!this.isBrowser) return false;

    const token = this.getToken();
    if (!token) return false;

    const decoded = this.decodeToken();
    const expiration = decoded?.exp ? decoded.exp * 1000 : 0;

    return Date.now() < expiration;
  }
}
