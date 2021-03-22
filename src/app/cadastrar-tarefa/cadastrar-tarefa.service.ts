import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from './Tarefa';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CadastrarTarefaService {

  tarefaUrlListar = 'http://209.126.10.114:3803/tarefas/listar'
  tarefaUrlSalvar = 'http://209.126.10.114:3803/tarefas/salvar'
  tarefaUrlAtualizar = 'http://209.126.10.114:3803/tarefas/atualizar'

  constructor(private http: HttpClient) {

  }

  public salvar(tarefa: Tarefa): Promise<Tarefa> {

    const headers = new HttpHeaders().append('Content-Type', 'Application/json')

    return this.http.post<Tarefa>(this.tarefaUrlSalvar, JSON.stringify(tarefa), { headers })
      .toPromise()
      .then(response => response);

  }

  public atualizarTarefa(codigo: number, tarefa: Tarefa): Promise<Tarefa> {

    return this.http.put<Tarefa>(`${this.tarefaUrlAtualizar}/${codigo}`, tarefa)
      .toPromise()
      .then(response => response);

  }

  public buscarPorId(codigo: number): Promise<any> {

    return this.http.get(`${this.tarefaUrlListar}/${codigo}`)
      .toPromise()
      .then(response => response);

  }

  private converterStringParaData(date: Date) {

    return moment(date, 'YYYY-MM-DD').toDate();

  }




}
