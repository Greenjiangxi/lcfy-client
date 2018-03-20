import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env/env';

@Component({
	selector: 'app-payment',
	templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit {

  constructor(private http: HttpClient) {};

	ngOnInit() {
  }
}
