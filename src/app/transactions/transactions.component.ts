import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { AuthHttp } from 'angular2-jwt';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
})
export class TransactionsComponent implements OnInit {
  columns: ITdDataTableColumn[] = [{
      name: 'date',
      label: '时间'
    },
    {
      name: 'project',
      label: '项目'
    },
    {
      name: 'action',
      label: '操作'
    },
    {
      name: 'quantity',
      label: '数量'
    },
    {
      name: 'price',
      label: '价格'
    },
  ];
  transactions: any = [];

  constructor(private authHttp: AuthHttp) {}

  ngOnInit() {
    this.authHttp.get("http://localhost:3000/transactions").subscribe(
      response => {
        this.transactions = response.json();
      });
  };
}

