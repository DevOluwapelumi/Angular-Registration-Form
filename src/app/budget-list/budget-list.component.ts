import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {

  selectedItem: any; 
  
  month: string = 'November'; 
  availableBudget: number = 0; 
  totalIncome: number = 0; 
  totalExpenses: number = 0; 
  expensesPercentage: number = 0; 

  transactionType: string = 'inc'; 
  transactionDescription: string = ''; 
  transactionValue: number = 0; 

  incomeList: any[] = []; 
  expenseList: any[] = []; 

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.loadBudgetData();
  }

  private loadBudgetData(): void {
    const savedData = this.budgetService.loadFromLocalStorage();

    if (savedData) {
      // Populate component properties with saved data
      this.month = savedData.month;
      this.availableBudget = savedData.availableBudget;
      this.totalIncome = savedData.totalIncome;
      this.totalExpenses = savedData.totalExpenses;
      this.expensesPercentage = savedData.expensesPercentage;
      this.incomeList = savedData.incomeList;
      this.expenseList = savedData.expenseList;
    }
  }


  addTransaction() {
    if (this.transactionDescription.trim() === '' || isNaN(this.transactionValue) || this.transactionValue <= 0) {
      // Validate transaction input
      this.saveBudgetData();
      return;   
    }
    const newTransaction = {
      description: this.transactionDescription,
      value: this.transactionValue,
      percentage: 0, 
    };
    if (this.transactionType === 'inc') {
      this.incomeList.push(newTransaction);
      this.totalIncome += this.transactionValue;
    } else if (this.transactionType === 'exp') {
      this.expenseList.push(newTransaction);
      this.totalExpenses += this.transactionValue;
      this.expensesPercentage = Math.round((this.totalExpenses / this.totalIncome) * 100);
    }
  
    this.calculateAvailableBudget();
    this.clearFields();
  }
  
  private calculateAvailableBudget() {
    this.availableBudget = this.totalIncome - this.totalExpenses;
  }
  
  private clearFields() {
    this.transactionDescription = '';
    this.transactionValue = 0;
    this.transactionType = 'inc';
  }
  private saveBudgetData(): void {
    const dataToSave = {
      month: this.month,
      availableBudget: this.availableBudget,
      totalIncome: this.totalIncome,
      totalExpenses: this.totalExpenses,
      expensesPercentage: this.expensesPercentage,
      incomeList: this.incomeList,
      expenseList: this.expenseList,
    };

    this.budgetService.saveToLocalStorage(dataToSave);
  }

  onEditItem(item: any): void {
    // Handle the edited item here
    // You may need to find the original item in the incomeList or expenseList and update it
    // Example:
    const index = this.incomeList.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      this.incomeList[index] = item;
    } else {
      // Check in the expenseList if not found in incomeList
      const expenseIndex = this.expenseList.findIndex((i) => i.id === item.id);
      if (expenseIndex !== -1) {
        this.expenseList[expenseIndex] = item;
      }
    }

    // Save the updated data to localStorage
    this.saveBudgetData();
  }
}
