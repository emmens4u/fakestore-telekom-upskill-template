import { Component, inject } from '@angular/core';
import { AuthService } from '../common/services/auth/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  public LoginState = '';
  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);

  public onSubmit(): void {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if (username && password) {
      this.authService.loginUser(username, password);
    }
  }

  public loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
}
