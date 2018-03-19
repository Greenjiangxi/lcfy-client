import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface TokenResponse {
  token: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  phone: string;
  password: string;
  vc: string;
  showError: boolean = false;
  error: string;

  constructor(private router: Router,
    private http: HttpClient
  ) {};

  signinPw(): void {
    this.http.post<TokenResponse>("http://localhost:3000/signin_pw", JSON.stringify({phone: this.phone, password: this.password})).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/comodities']);
      },
      error => {
        this.error = error.error._error;
        this.showError = true;
      }
    );
  };

  signinVc(): void {
    this.http.post<TokenResponse>("http://localhost:3000/signin_vc", JSON.stringify({phone: this.phone, vc: this.vc})).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/comodities']);
      },
      error => {
        this.error = error.error._error;
        this.showError = true;
      }
    );
  };

  sendVc(): void {
    this.http.post("http://localhost:3000/send_vc", JSON.stringify({phone: this.phone})).subscribe(
      response => {
      },
      error => {
        this.error = error.error._error;
        this.showError = true;
      }
    );
  }
}
