import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env/env';

@Component({
  selector: 'app-comodities',
  templateUrl: './comodities.component.html',
})
export class ComoditiesComponent implements OnInit {
  comodities: any = [];

  constructor(private http: HttpClient) {};

  ngOnInit() {
    this.http.get(env.url + "comodities").subscribe(
      response => {
        this.comodities = response;
      })
  }
}

