import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  sidebarVisible = true;
  role: string = '';

  constructor(private tokenService: TokenService) { }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  ngOnInit() {
    this.role = this.tokenService.getUserRole() ?? '';
  }
}
