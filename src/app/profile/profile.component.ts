import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user: any = {};
  changeState: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:3000/profile").subscribe(
      response => {
        this.user = response;
      });
  }

  change(): void {
    this.changeState = true;
  }

  save(): void {
    this.http.put("http://localhost:3000/profile", JSON.stringify(this.user)).subscribe(
      response => {
        this.changeState = false;
        this.user = response;
      });
  }
}


