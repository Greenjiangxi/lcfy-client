import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { ComoditiesComponent } from './comodities/comodities.component';
import { PropertiesComponent } from './properties/properties.component';
import { TradeComponent } from './trade/trade.component';
import { PaymentComponent } from './payment/payment.component';
import { LogsComponent } from './logs/logs.component';

const routes: Routes = [
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        component: LayoutHomeComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'signin',
                component: SigninComponent,
            },
            {
                path: 'signup',
                component: SignupComponent,
            }
        ],
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'comodities',
                component: ComoditiesComponent,
            },
            {
                path: 'properties',
                component: PropertiesComponent,
            },
            {
                path: 'profile',
                component: ProfileComponent,
            },
            {
                path: 'comodities/:id',
                component: TradeComponent
            },
            {
                path: 'logs',
                component: LogsComponent
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
  LayoutHomeComponent,
  HomeComponent,
  SigninComponent,
  SignupComponent,
  LayoutComponent,
  ProfileComponent,
  ComoditiesComponent,
  PropertiesComponent,
  TradeComponent,
  LogsComponent
];
