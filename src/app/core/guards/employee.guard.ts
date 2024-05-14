import { AuthService } from './../../auth/services/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const employeeGuard: CanActivateFn = (route, state) => {
 debugger
  const _AuthService = inject(AuthService);
  const _Router = inject(Router);
  const role = _AuthService.role;

  if (localStorage.getItem('tokenOfUserr') !== null && role =='Employee') {
    return true;
  }else{
    _Router.navigate(['/auth']);
    return false;
  }
};
