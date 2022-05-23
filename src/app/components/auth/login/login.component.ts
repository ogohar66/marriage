
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: any;
  loginForm: FormGroup
  error = false
  isFormSubmitted: Boolean;
  loginLang = environment.login
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.activeRouter.snapshot.queryParams['returnUrl'] || '/';

    this.isFormSubmitted = false
  }

  ngOnInit(): void {

  }
  login() {

  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  submite() {
    this.isFormSubmitted = true
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe({
        next:()=>{
          localStorage.setItem('isLogin','true')
          
          this.router.navigate([this.returnUrl])
        },
        error:()=>{
          this.error=true
          setInterval(()=>{this.error=false},2000)
        }
      })
    }
  }
}
