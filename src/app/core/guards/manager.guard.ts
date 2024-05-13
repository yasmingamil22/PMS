import { AuthService } from './../../auth/services/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';



export const managerGuard: CanActivateFn = (route, state) => {

  const _AuthService = inject(AuthService);
  const _Router = inject(Router);
  const role = _AuthService.role;
  if (localStorage.getItem('tokenOfUserr') !== null && role == 'Manager') {
    return true;
  }else{
    _Router.navigate(['/auth']);
    return false;
  }
};
