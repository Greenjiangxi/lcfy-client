import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';
import { Router, ActivatedRoute } from '@angular/router';
import { TdDialogService } from '@covalent/core/dialogs';

@Component({
  selector: 'app-logon-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit{
  title: string;

  navmenu: Object[] = [
    {
      icon: 'transform',
      route: '/comodities',
      title: '交易',
      description: '发布的交易',
    },
    {
      icon: 'face',
      route: '/profile',
      title: '个人',
      description: '个人信息',
    }, {
      icon: 'widgets',
      route: '/properties',
      title: '资产',
      description: '我的资产',
    }, {
      icon: 'work',
      route: '/logs',
      title: '记录',
      description: '交易记录',
    }
  ];

  constructor(public media: TdMediaService,
    public dialogService: TdDialogService,
    public viewContainerRef: ViewContainerRef,
    public activatedRoute: ActivatedRoute,
    public router: Router,) {
      
  }

  ngOnInit() {
  }

  openSignoffConfirm(): void {
    this.dialogService.openConfirm({
      message: '确定登出么？',
      viewContainerRef: this.viewContainerRef,
      title: '登出',
      cancelButton: '取消',
      acceptButton: '登出', 
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this.router.navigate(['/home']);
        localStorage.removeItem('token');
      } else {
        
      }
    });
  }
}

