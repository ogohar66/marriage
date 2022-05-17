import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/layout/base/base.component';


const routes: Routes = [
  {
  path: '',
    component: BaseComponent,
    children: [
      {
        path:'',redirectTo:'home',pathMatch:'full'
      },
      {
        path: 'home',
        loadChildren:()=>import('./components/home/home.module').then(m=>m.HomeModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('./components/message/message.module').then(m => m.MessageModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule)
      },
      ]
    },
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
