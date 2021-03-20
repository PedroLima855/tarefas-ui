import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../handler/error-handler.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private router: Router,
    public service: AuthService,
    private erroHandler: ErrorHandlerService
  ) { }

  public login(usuario: string, senha: string) {

      this.service.login(usuario, senha)
      .then(() => null)
      .catch(erro => {
        this.erroHandler.handle(erro);
      });

  }

}
