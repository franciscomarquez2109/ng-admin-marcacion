import { Component } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,MatCardModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  datauser: any;

  constructor(
    private fb: FormBuilder,
    private serviceLogin: LoginService,
    private router:Router
  ) { }

  ngOnInit(){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.serviceLogin.login(
        this.loginForm.get('username')?.value,
        this.loginForm.get('password')?.value
      ).subscribe(resp=>{
        localStorage.setItem('dataUser',JSON.stringify(resp.payload[0]));
        this.router.navigateByUrl('/dashboard')
      })
    } else {
      console.error('Invalid form');
    }
  }
  
}
