import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../services/auth';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  private authService = inject(Auth);
  private router = inject(Router);

  name = '';
  email = '';
  password = '';
  errorMessage = '';

  onSignup(): void {
    this.errorMessage = '';

    if (
      !this.name.trim() ||
      !this.email.trim() ||
      !this.password
    ) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage =
        'Password must be at least 6 characters.';
      return;
    }

    const success = this.authService.signup(
      this.name,
      this.email,
      this.password
    );

    if (!success) {
      this.errorMessage =
        'An account with this email already exists.';
      return;
    }

    // Registration succeeded; go to login.
    this.router.navigate(['/login']);
  }
}
