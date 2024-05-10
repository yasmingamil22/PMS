import { CanActivateFn } from '@angular/router';

export const managerGuard: CanActivateFn = (route, state) => {
  return true;
};
