import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AuthComponent {
  loginForm: FormGroup;
  error = '';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const credentials = this.loginForm.value;

    this.authService.login(credentials).subscribe({
      next: () => {
        // Redirection dans le service
      },
      error: (err) => {
        console.error("Erreur d'authentification :", err);
        this.error = "Identifiants incorrects";
      },
    });
  }

  logout() {
    this.authService.logout();
  }
}
