import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../../infra/api.service";
import { TokenService } from "./token.service";
import { Observable, tap } from "rxjs";
import { AuthEndpoint } from "../../infra/endpoint/auth.endoint";

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private api: ApiService
  ) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.api
      .request('POST', AuthEndpoint.login.url, credentials)
      .pipe(
        tap((res: any) => {
          // Enregistre le token reçu
          if (res && res.token) {
            this.tokenService.setToken(res.token);
            console.log('tokennnn', res.token)
            this.redirectUserByRole();
          }
        })
      );
  }

  logout(): void {
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }

  redirectUserByRole(): void {
    const role = this.tokenService.getUserRole();
    console.log('Role user', role);
    switch (role) {
      case 'admin':
        this.router.navigate(['/dashboard']);
        break;
      case 'user':
        this.router.navigate(['/fournisseur']);
        break;
      case 'manager':
        this.router.navigate(['/stock']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }
}
