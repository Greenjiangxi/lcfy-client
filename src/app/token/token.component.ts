import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StepState } from '@covalent/core/steps';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env/env';
import { ITdDataTableColumn } from '@covalent/core/data-table';

@Component({
	selector: 'app-token',
	templateUrl: './token.component.html',
})
export class TokenComponent implements OnInit {
  trend: any[] = [];
  view: any[] = [1200, 600];
  showXAxis: boolean = false;
  showYAxis: boolean = true;
  colorScheme: any = {domain: ['#0D47A1', '#1976D2', '#039BE5', '#29B6F6', '#81D4FA', '#B2EBF2']};

  token: any = {};
  transactions: any = [];
  vc: string;
  columns: ITdDataTableColumn[] = [{
    name: 'date',
    label: '时间'
  },
  {
    name: 'from',
    label: '地址'
  },
  {
    name: 'action',
    label: '操作'
  },
  {
    name: 'price',
    label: '价格(元)'
  },
  {
    name: 'volumn',
    label: '成交量'
  },
  {
    name: 'amount',
    label: '成交额(元)'
  }
];

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {};

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(env.url + "token/" + id).subscribe(
      response => {
        this.token = response;
      });

    this.http.get(env.url + "transactions/" + id).subscribe(
      response => {
        this.transactions = response;
      });

    this.http.get(env.url + "trend/" + id).subscribe(
      response => {
        this.trend = [
          {
            "name": "价格",
            "series": response
          }
        ];
      });

  }

  sendVc(): void {
    this.http.post(env.url + "send_vc", JSON.stringify({})).subscribe(
        response => {
        });
  }

  pay(): void {
    this.http.post(env.url + "payments", JSON.stringify({
      comodity_id: this.token.id, 
      action: '购买',
      vc: this.vc
    })).subscribe(
      response => {
        this.router.navigate(['/payment']);
      });
  }
}

