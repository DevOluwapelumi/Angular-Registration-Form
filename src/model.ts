// export class BudgetItem {

//     constructor(public description: string, public amount: number) { }
//   }

// models.ts
export interface Expense {
  id: number;
  description: string;
  value: number;
  percentage: number;
}

export interface Income {
  id: number;
  description: string;
  value: number;
}
