import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  messageService = new MessageService

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;

      this.toastr.error('Usuario ou senha invalidos');

    } else if (errorResponse instanceof HttpErrorResponse
      && errorResponse.status === 400) {

      this.toastr.error('Ocorreu um erro ao processar a sua solicitação');

    } else if (errorResponse instanceof HttpErrorResponse
      && errorResponse.status >= 401 && errorResponse.status <= 499) {

      this.toastr.error('Ocorreu um erro ao processar a sua solicitação');
    }

    
    this.messageService.add({ severity: 'error' });
  }
}
