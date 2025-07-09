
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../../presentation/services/token.service';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  const expectedRoles = route.data['roles'] as string[];


  const isLoggedIn = tokenService.isLoggedIn();
  const userRole = tokenService.getUserRole();


  if (!isLoggedIn || !userRole) {
    return router.parseUrl('/login');
  }

  // Vérifie si le rôle est autorisé
  if (expectedRoles && !expectedRoles.includes(userRole)) {
    return router.parseUrl('/unauthorized');
  }

  return true;
};
