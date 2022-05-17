import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
 login()
 {
   console.log('ff')
   this.http.get('http://appname.local/sanctum/csrf-cookie',{withCredentials :true}).subscribe(()=>{
    this.http.post('http://api.localhost/api/login',{email:'ogohar66@gmail.com',password:'20102010'},{withCredentials :true}).subscribe(
     res=>console.log(res)
   )
   })
   
 }
}
