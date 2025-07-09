import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(private authService:AuthService){}

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  logout(){
    this.authService.logout();
  }
}
