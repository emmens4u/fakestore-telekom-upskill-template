import { Component, inject } from '@angular/core';
import { AuthService } from '../common/services/auth/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
})


export class AuthComponent {
  public LoginState = '';
  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);


  public onSubmit(): void {
    this.authService.loginUser(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
  }

  public loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
}
