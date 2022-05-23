import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Login } from '../view_model/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User = {} as User
  constructor(private http: HttpClient,
  ) { }
  prepareUser() {
    if (this.isLogin) {
      this.http.get<User>(`${environment.backEndApi}/userdata`).subscribe(
        (res: User) => {
          this.user = res
        }
      )
    }
  }
  login(data: Login) {
     this.http.get('http://api.appname.local/sanctum/csrf-cookie',{withCredentials :true}).subscribe(()=>{
     })
     return  this.http.post(`${environment.backEndApi}/login`,data)
    
  }
  logout() {
    return this.http.get(`${environment.backEndApi}/logout`)
  }
  get isLogin() {
    return localStorage.getItem('isLogin') ? true : false
  }
}
