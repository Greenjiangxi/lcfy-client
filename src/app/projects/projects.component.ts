import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  projects: any = [];

  constructor(private authHttp: AuthHttp) {};

  ngOnInit() {
    this.authHttp.get("http://localhost:3000/projects").subscribe(
      response => {
        this.projects = response.json();
      })
  }
}

