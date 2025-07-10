import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isVisible = true;
  @Input() role: string = '';

  constructor(private authService:AuthService){}

  logout(){
    this.authService.logout();
  }



}
