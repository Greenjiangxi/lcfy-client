import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthHttp } from 'angular2-jwt';

@Component({
	selector: 'app-payment',
	templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit {

  constructor(private authHttp: AuthHttp) {};

	ngOnInit() {
  }
}
