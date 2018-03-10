import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { TradeComponent } from './trade/trade.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'signin',
        component: SigninComponent,
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'projects',
                component: ProjectsComponent,
            },
            {
                path: 'profile',
                component: ProfileComponent,
            },
            {
                path: 'project/:id',
                component: TradeComponent
            },
            {
                path: 'transactions',
                component: TransactionsComponent
            },
            {
                path: 'payment',
                component: PaymentComponent
            }
        ],
    },
    { path: '**', redirectTo:'home' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }
export const routedComponents: any[] = [
  HomeComponent,
  SigninComponent,
  LayoutComponent,
  ProfileComponent,
  ProjectsComponent,
  TradeComponent,
  TransactionsComponent
];
