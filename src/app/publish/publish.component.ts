import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StepState } from '@covalent/core/steps';
import { HttpClient } from '@angular/common/http';

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
    this.http.get("http://localhost:3000/properties/" + id).subscribe(
      response => {
        this.property = response;
      });
  }

  sendVc(): void {
    this.http.post("http://localhost:3000/send_vc", JSON.stringify({})).subscribe(
        response => {
        });
  }

  publish(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.put("http://localhost:3000/properties/" + id, JSON.stringify({
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

