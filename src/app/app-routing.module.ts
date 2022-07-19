import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'users', 
    component: UsersComponent 
  },
  {
    path: 'customers', 
    component: CustomersComponent 
  },
  { 
    path: '', 
    redirectTo: 'users', 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
