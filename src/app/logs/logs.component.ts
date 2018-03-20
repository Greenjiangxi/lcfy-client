import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env/env';


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
})
export class LogsComponent implements OnInit {
  columns: ITdDataTableColumn[] = [{
      name: 'date',
      label: '时间'
    },
    {
      name: 'comodity',
      label: '物品'
    },
    {
      name: 'action',
      label: '操作'
    },
    {
      name: 'price',
      label: '价格'
    },
    {
      name: 'description',
      label: '描述'
    },
  ];
  logs: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(env.url + "logs").subscribe(
      response => {
        this.logs = response;
      });
  };
}

