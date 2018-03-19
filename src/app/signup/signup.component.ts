import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

  constructor(private router: Router,
    private http: HttpClient
  ) {};

  signin(): void {
    this.http.post<TokenResponse>("http://localhost:3000/signin", JSON.stringify({phone: this.phone, vc: this.vc})).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/comodities']);
      });
  };

  sendVc(): void {
    this.http.post("http://localhost:3000/send_vc", JSON.stringify({phone: this.phone})).subscribe(
        response => {
        });
  }
}
