import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env/env';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
})
export class PropertiesComponent implements OnInit {
  properties: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(env.url + "properties").subscribe(
      response => {
        this.properties = response;
      })
  };
}

