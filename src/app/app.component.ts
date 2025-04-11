import { Component } from '@angular/core';
import { InvestmentData } from './components/investment-results/investment.model';
import { InvestmentService } from './service/investment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private investmentService: InvestmentService) {}

  onCalculateInvestmentResults(data: InvestmentData) {
    this.investmentService.onCalculateInvestmentResults(data);
  }
}

