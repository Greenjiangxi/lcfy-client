import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env/env';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user: any = {};
  changeState: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(env.url + "profile").subscribe(
      response => {
        this.user = response;
      });
  }

  change(): void {
    this.changeState = true;
  }

  save(): void {
    this.http.put(env.url + "profile", JSON.stringify(this.user)).subscribe(
      response => {
        this.changeState = false;
        this.user = response;
      });
  }
}


