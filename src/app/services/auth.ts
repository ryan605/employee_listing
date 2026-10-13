import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  name: string;
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root',
})
export class Auth {
  private usersKey = 'users';
  private sessionKey = 'loggedInUser';

  constructor(private router: Router) {}

  private getUsers(): User[] {
    return JSON.parse(
      localStorage.getItem(this.usersKey) || '[]'
    );
  }

  signup(name: string, email: string, password: string): boolean {
    const users = this.getUsers();
    const normalizedEmail = email.trim().toLowerCase();

    const exists = users.some(
      user => user.email === normalizedEmail
    );

    if (exists) {
      return false;
    }

    users.push({
      name: name.trim(),
      email: normalizedEmail,
      password
    });

    localStorage.setItem(this.usersKey, JSON.stringify(users));

    return true;
  }

  login(email: string, password: string): boolean {
    const normalizedEmail = email.trim().toLowerCase();

    const user = this.getUsers().find(
      user =>
        user.email === normalizedEmail &&
        user.password === password
    );

    if (!user) {
      return false;
    }

    // Store only basic session information.
    localStorage.setItem(
      this.sessionKey,
      JSON.stringify({
        name: user.name,
        email: user.email
      })
    );

    return true;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.sessionKey) !== null;
  }

  logout(): void {
    localStorage.removeItem(this.sessionKey);
    this.router.navigate(['/login']);
  }
}
