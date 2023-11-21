import { Component } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {
  income: number = 0;
  expenses: number = 0;
  budget: number | undefined;
  budgetDescription: string | undefined;
  budgetCalculated: boolean = false;

  ngOnInit() {
    // Load saved data from localStorage
    const savedData = localStorage.getItem('budgetData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      this.income = parsedData.income;
      this.expenses = parsedData.expenses;
      this.budgetDescription = parsedData.budgetDescription;
      this.budget = parsedData.budget;
      this.budgetCalculated = parsedData.budgetCalculated;
    }
  }

  calculateBudget() {
    if (this.income !== undefined && this.expenses !== undefined) {
      this.budget = this.income - this.expenses;
      this.budgetCalculated = true;

      const dataToSave = {
        income: this.income,
        expenses: this.expenses,
        budgetDescription: this.budgetDescription,
        budget: this.budget,
        budgetCalculated: this.budgetCalculated
      };

      localStorage.setItem('budgetData', JSON.stringify(dataToSave));
    }
  }
}
