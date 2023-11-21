import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
    private localStorageKey = 'budgetData';
  
    saveToLocalStorage(data: any): void {
      localStorage.setItem(this.localStorageKey, JSON.stringify(data));
    }
  
    loadFromLocalStorage(): any {
      const savedData = localStorage.getItem(this.localStorageKey);
      return savedData ? JSON.parse(savedData) : null;
    }

  constructor() { }
}
