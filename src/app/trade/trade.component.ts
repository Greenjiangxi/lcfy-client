import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StepState } from '@covalent/core/steps';
import { AuthHttp } from 'angular2-jwt';

@Component({
	selector: 'app-trade',
	templateUrl: './trade.component.html',
})
export class TradeComponent implements OnInit {
  stepState1: StepState = StepState.None;
  stepState2: StepState = StepState.Required;
  stepState3: StepState = StepState.None;
  stepDisabled3: boolean = true;
  buttonDisabled2: boolean = false;
  project: any = {};
  quantity: number = 0;
  price: number = 0;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private authHttp: AuthHttp) {};

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.authHttp.get("http://localhost:3000/project/" + id).subscribe(
      response => {
        this.project = response.json();
      });
  }

  changeQuantity(): void {
    this.stepState1 = StepState.Complete;
    this.price = this.quantity * this.project.price;
  }

  confirmContract(): void {
    this.stepState2 = StepState.Complete;
    this.stepDisabled3 = false;
    this.buttonDisabled2 = true;
  }

  pay(): void {
    this.authHttp.post("http://localhost:3000/trade", JSON.stringify({
      project_id: this.project.id, 
      action: '购买',
      quantity: this.quantity,
      price: this.price
    })).subscribe(
      response => {
        this.router.navigate(['/transactions']);
      });
  }
}

