import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../autenticacao';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | Promise<boolean> | boolean{
    const token: string = localStorage.getItem('token-photo-gallery') || '';
    if(!token) {
      this.router.navigate(['/login']); 
      return false;
    }
    const decoded: any = jwt_decode(token);
    if (!decoded.email) {
      this.router.navigate(['/login']); 
      return false;
    }
    
    return new Promise((resolve, reject) => {
      this.loginService.obterPorEmail(token, decoded.email)
        .subscribe(data => {
          resolve(true);
        }, err => {
          if(err && err.status === 401) {
            this.toastr.error('Sessão expirada!', 'Atenção!');
          } 
          else if(err && err.error) {
            this.toastr.error(err.error.mensagem, 'Erro!');
          }
          else {
            this.toastr.error('Não foi possívvel atenticar o acesso!', 'Erro!');
          }
          this.router.navigate(['/login']); 
          resolve(false);
        })
    });

  }
}
