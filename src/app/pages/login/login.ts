import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  loginMessage = '';

  login(): void {
    if (!this.username.trim() || !this.password.trim()) {
      this.loginMessage = 'Please enter a username and password.';
      return;
    }

    this.loginMessage = 'Login information submitted.';
  }
}
