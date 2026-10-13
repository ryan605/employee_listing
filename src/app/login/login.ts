import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   private authService = inject(Auth);
  private router = inject(Router);

  email = '';
  password = '';
  errorMessage = '';

  onLogin(): void {
    this.errorMessage = '';

    const success = this.authService.login(
      this.email,
      this.password
    );

    if (success) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}
