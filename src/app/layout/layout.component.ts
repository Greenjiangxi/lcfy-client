import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logon-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit{
  title: string;

  navmenu: Object[] = [{
      icon: 'face',
      route: '/profile',
      title: '信息',
      description: '修改信息',
    }, {
      icon: 'widgets',
      route: '/projects',
      title: '项目',
      description: '项目列表',
    }, {
      icon: 'work',
      route: '/transactions',
      title: '交易',
      description: '交易记录',
    }
  ];

  constructor(public media: TdMediaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,) {
      
    }

    ngOnInit() {
    }

  signoff(): void {
    this.router.navigate(['/home']);
    localStorage.removeItem('token');
  }

}

