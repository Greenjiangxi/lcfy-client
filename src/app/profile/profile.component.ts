import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user: any = {};
  changeState: boolean = false;

  constructor(private authHttp: AuthHttp) {}

  ngOnInit() {
    this.authHttp.get("http://localhost:3000/profile").subscribe(
      response => {
        this.user = response.json();
      });
  }

  change(): void {
    this.changeState = true;
  }

  save(): void {
    this.authHttp.put("http://localhost:3000/profile", JSON.stringify(this.user)).subscribe(
      response => {
        this.changeState = false;
        this.user = response.json();
      });
  }
}


