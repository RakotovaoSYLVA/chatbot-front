import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    )
    {};

  logout(){
    this.authService.logout();
  }

  isLoggedIn(): boolean{
    return this.tokenService.isLoggedIn();
  }
}
