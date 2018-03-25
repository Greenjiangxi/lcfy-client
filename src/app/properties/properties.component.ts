import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core/data-table';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env/env';
import { TdDialogService } from '@covalent/core/dialogs';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
})
export class PropertiesComponent implements OnInit {
  properties: any = [];

  constructor(private http: HttpClient,
    public dialogService: TdDialogService,
    public viewContainerRef: ViewContainerRef,) {}

  ngOnInit() {
    this.http.get(env.url + "properties").subscribe(
      response => {
        this.properties = response;
      })
  };

  openPublishConfirm(): void {
    this.dialogService.openConfirm({
      message: '确定发布么？',
      viewContainerRef: this.viewContainerRef,
      title: '发布',
      cancelButton: '取消',
      acceptButton: '发布', 
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
      } else {
        
      }
    });
  }
}

