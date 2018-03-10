import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  phone: string;
  vc: string;

  constructor(private router: Router,
    private http: Http
  ) {};

  signin(): void {
    this.http.post("http://localhost:3000/signin", JSON.stringify({phone: this.phone, vc: this.vc})).subscribe(
      response => {
        localStorage.setItem('token', response.json().token);
        this.router.navigate(['/projects']);
      });
  };

  sendVc(): void {
    this.http.post("http://localhost:3000/send_vc", JSON.stringify({phone: this.phone})).subscribe(
        response => {
        });
  }
}
