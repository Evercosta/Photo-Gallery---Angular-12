import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Login } from '../';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  logar(login: Login): Observable<any> {
    return this.http.post(env.baseUrl + '/login/autenticar', login);
  }
}
