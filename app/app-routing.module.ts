import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { OperatorComponent } from './components/operator/operator.component';
import { OperatorupdateComponent } from './components/operatorupdate/operatorupdate.component';
import { OperatorDeleteComponent } from './components/operator-delete/operator-delete.component';
import { CounterAdditionComponent } from './components/counter-addition/counter-addition.component';
import { CounterDeleteComponent } from './components/counter-delete/counter-delete.component';
import { EmployeeAddtionComponent } from './components/employee-addtion/employee-addtion.component';
import { EmployeeUpdationComponent } from './components/employee-updation/employee-updation.component';
import { EmployeeDeletionComponent } from './components/employee-deletion/employee-deletion.component';
import { TokenGeneratorComponent } from './components/token-generator/token-generator.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'login/signup', component: SignupComponent },

  {
    path: 'login/DashBoard', component: SidebarComponent,
    children: [
      { path: 'operator', component: OperatorComponent },

      { path: 'operatorUpdate', component: OperatorupdateComponent },

      { path: 'operatorDelete', component: OperatorDeleteComponent },

      { path: 'counterAddtion', component: CounterAdditionComponent },

      { path: 'counterDeletion', component: CounterDeleteComponent },

      { path: 'operator2Addtion', component: EmployeeAddtionComponent },

      { path: 'operator2Update', component: EmployeeUpdationComponent },

      { path: 'operator2Delete', component: EmployeeDeletionComponent },

      { path: 'tokenGenerator', component: TokenGeneratorComponent }
    ]
  },






];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
