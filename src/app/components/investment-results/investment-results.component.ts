import { Component, Input } from '@angular/core';
import { InvestmentResult, InvestmentService } from '../../service/investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss'
})
export class InvestmentResultsComponent {

  constructor(public investmentService: InvestmentService) {}

  get results(): InvestmentResult[] {
    return this.investmentService.resultsData;
  }
}
