import { CanActivateFn } from '@angular/router';

export const employeeGuard: CanActivateFn = (route, state) => {
  return true;
};
