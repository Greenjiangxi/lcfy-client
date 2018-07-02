import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { env } from '../../env/env';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  columns: ITdDataTableColumn[] = [{
      name: 'type',
      label: '种类'
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
    },
    {
      name: 'change',
      label: '涨跌'
    },
  ];
  tokens: any = [];

  constructor(private http: HttpClient,
	private router: Router) {}

  ngOnInit() {
    this.http.get(env.url + "tokens").subscribe(
      response => {
        this.tokens = response;
      });
  };

  gotoToken(tokenId): void {
        this.router.navigate(['/token/' + tokenId]);
  }
}
