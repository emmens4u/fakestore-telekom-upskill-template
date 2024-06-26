import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from '../../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private appUrl = environment.appUrl;
  private http = inject(HttpClient);
  private router = inject(Router);

  public loginUser(username: string, password: string): void {
    this.http
      .post<LoginResponse>(`${this.appUrl}/auth/login`, { username, password })
      .subscribe({
        next: (response) => {
          const token = response.token;
          localStorage.setItem('token', token);
          this.router.navigate(['/products']);
        },
        error: (error) => console.log(error, 'login error'),
      });
  }

  public logoutUser(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }
}
