import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../common/services/auth/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isAuthenticated = authService.getToken();
  
  if (isAuthenticated) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
