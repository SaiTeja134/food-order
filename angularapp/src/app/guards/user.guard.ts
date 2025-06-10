import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const role = localStorage.getItem('role');
  const token = localStorage.getItem('token');
  if (!token || !role) {
    router.navigate(['/login']);
    return false;
  }

  try {
    
    // Check if token exists and role is 'seller'
    if (token && role === 'user') {
      return true;
    }
    
    // Redirect to home if not a seller
    router.navigate(['/']);
    return false;
  } catch (error) {
    console.error('Error parsing user data:', error);
    router.navigate(['/login']);
    return false;
  }
};
