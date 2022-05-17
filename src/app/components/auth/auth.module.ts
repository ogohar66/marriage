import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResgisterComponent } from './resgister/resgister.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch:'full'
  },
  {
    path:'register',
    component:ResgisterComponent
  }

]


@NgModule({
  declarations: [
    LoginComponent,
    ResgisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class AuthModule { }
