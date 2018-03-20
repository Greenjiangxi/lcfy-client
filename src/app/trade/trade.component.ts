import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StepState } from '@covalent/core/steps';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env/env';

@Component({
	selector: 'app-trade',
	templateUrl: './trade.component.html',
})
export class TradeComponent implements OnInit {
  comodity: any = {};
  vc: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {};

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(env.url + "comodities/" + id).subscribe(
      response => {
        this.comodity = response;
      });
  }

  sendVc(): void {
    this.http.post(env.url + "send_vc", JSON.stringify({})).subscribe(
        response => {
        });
  }

  pay(): void {
    this.http.post(env.url + "payments", JSON.stringify({
      comodity_id: this.comodity.id, 
      action: '购买',
      vc: this.vc
    })).subscribe(
      response => {
        this.router.navigate(['/payment']);
      });
  }
}

