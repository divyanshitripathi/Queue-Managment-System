import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginService } from './login/login.service';
import { SignupService } from './login/signup/signup.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OperatorComponent } from './components/operator/operator.component';
import { OperatorupdateComponent } from './components/operatorupdate/operatorupdate.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OperatorDeleteComponent } from './components/operator-delete/operator-delete.component';
import { CounterAdditionComponent } from './components/counter-addition/counter-addition.component';
import { CounterDeleteComponent } from './components/counter-delete/counter-delete.component';
import { EmployeeAddtionComponent } from './components/employee-addtion/employee-addtion.component';
import { EmployeeUpdationComponent } from './components/employee-updation/employee-updation.component';
import { EmployeeDeletionComponent } from './components/employee-deletion/employee-deletion.component';
import { TokenGeneratorComponent } from './components/token-generator/token-generator.component';
import { AuthgardGuard } from './components/Authgards/authgard.guard';
import { CounterAddtionService } from './components/counter-addition/counter-addtion.service';
import { CounterDeletionService } from './components/counter-delete/counter-deletion.service';
import { OperatorService } from './components/operator/operator.service';
import { OperatordeleteService } from './components/operator-delete/operatordelete.service';
import { OperatorupdateService } from './components/operatorupdate/operatorupdate.service';
import { EmployeeAddtionService } from './components/employee-addtion/employee-addtion.service';
import { EmployeeUpdationService } from './components/employee-updation/employee-updation.service';
import { EmployeeDeletionService } from './components/employee-deletion/employee-deletion.service';
import { TokenGeneratorService } from './components/token-generator/token-generator.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    OperatorComponent,
    OperatorupdateComponent,
    OperatorDeleteComponent,
    CounterAdditionComponent,
    CounterDeleteComponent,
    EmployeeAddtionComponent,
    EmployeeUpdationComponent,
    EmployeeDeletionComponent,
    TokenGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    Ng2SearchPipeModule,
  ],
  providers: [AuthgardGuard,LoginService, SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
