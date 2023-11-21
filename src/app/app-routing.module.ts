import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { WildcashComponent } from './wildcash/wildcash.component';
import { BudgetComponent } from './budget/budget.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { BudgetListComponent } from './budget-list/budget-list.component';

const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: "full"},
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  {path: 'home', component: HomeComponent},
  {path: 'budget', component: BudgetComponent},
  {path: 'add', component: AddItemComponent},
  {path: 'list', component: BudgetListComponent},
  {path: 'edit', component: EditItemComponent},
  {path: '**', component: WildcashComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
