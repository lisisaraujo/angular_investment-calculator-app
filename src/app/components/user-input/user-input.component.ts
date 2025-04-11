import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InvestmentService } from '../../service/investment.service';
import { InvestmentData } from '../investment-results/investment.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {
@Output() calculate = new EventEmitter<InvestmentData>();
initialInvestment = '0'
annualInvestment = '0'
duration = '4'
expectedReturn = '10'
  
  constructor(private investmentService: InvestmentService){}
  
  
  onSubmit() {
    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      duration: +this.duration,
      expectedReturn: +this.expectedReturn
    
    })
  }

}
