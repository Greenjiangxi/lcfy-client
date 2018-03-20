import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StepState } from '@covalent/core/steps';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env/env';

@Component({
	selector: 'app-publish',
	templateUrl: './publish.component.html',
})
export class PublishComponent implements OnInit {
  property: any = {};
  vc: string;
  price: number = 0;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {};

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(env.url + "properties/" + id).subscribe(
      response => {
        this.property = response;
      });
  }

  sendVc(): void {
    this.http.post(env.url + "send_vc", JSON.stringify({})).subscribe(
        response => {
        });
  }

  publish(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.put(env.url + "properties/" + id, JSON.stringify({
      property_id: this.property.id, 
      action: '发布',
      vc: this.vc,
      price: this.price
    })).subscribe(
      response => {
        this.router.navigate(['/comodities']);
      });
  }
}

