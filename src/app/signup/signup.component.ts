import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env/env';

interface TokenResponse {
  token: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  phone: string;
  password: string;
  rePassword: string;
  vc: string;
  showError: boolean = false;
  error: string;

  constructor(private router: Router,
    private http: HttpClient
  ) {};

  signup(): void {
    if (this.password != this.rePassword) {
      this.error = '两次密码不一致';
      this.showError = true;
      return;
    }
    this.http.post<TokenResponse>(env.url + "signup", JSON.stringify({phone: this.phone, passowrd: this.password, vc: this.vc})).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/comodities']);
      },
      error => {
        this.error = error.error._error;
        this.showError = true;
      });
  };

  sendVc(): void {
    this.http.post(env.url + "send_vc", JSON.stringify({phone: this.phone})).subscribe(
        response => {
        },
        error => {
          this.error = error.error._error;
          this.showError = true;
        });
  }
}
