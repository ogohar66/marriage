import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponent } from './active/active.component';

import { Routes, RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { NewUserComponent } from './new-user/new-user.component';
import { PremiumUserComponent } from './premium-user/premium-user.component';
import { HealthUserComponent } from './health-user/health-user.component';

const routes:Routes = 
[
  {
    path:'active',
    component:ActiveComponent
  },
  {
    path:'new',
    component:NewUserComponent
  },
  {
    path:'premium',
    component:PremiumUserComponent
  },
  {
    path:'health',
    component:HealthUserComponent
  },
  {
    path:'',
    redirectTo:'active',
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    ActiveComponent,
    NewUserComponent,
    PremiumUserComponent,
    HealthUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDividerModule
  ]
})
export class UsersModule { }
