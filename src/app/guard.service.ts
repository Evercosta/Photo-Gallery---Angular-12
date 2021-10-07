import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    return true
  }
}
