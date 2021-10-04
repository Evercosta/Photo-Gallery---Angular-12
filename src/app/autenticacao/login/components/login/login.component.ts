import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services';

import { Login } from '../../index';

@Component({
  selector: 'app-login-pf',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public form: FormGroup; // agrupa os comp do form
  public form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]]
  })

  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    // this.gerarForm();
  }

  logar(){
    if (this.form.invalid) {
      this.toastr.error(
        'Email/Senha inválido(s)!', 
        'Erro!', {
          tapToDismiss: false,
        }
      );
    } else {
      this.loading = true
      const login: Login = this.form.value;
      this.loginService.logar(login)
        .subscribe(data => {
          localStorage.setItem('token-photo-gallery', data.mensagem.token);
          this.loading = false
          this.router.navigate(['/']);
        },
        err => {
          console.log(err);
          this.toastr.error(err.error.mensagem, 'Erro!');
          this.loading = false
        });
      
    }
  }
}
