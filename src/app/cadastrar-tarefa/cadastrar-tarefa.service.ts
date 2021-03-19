import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from './Tarefa';


@Injectable({
  providedIn: 'root'
})
export class CadastrarTarefaService {

  tarefaUrlListar = 'http://localhost:9091/tarefas/salvar'

  constructor(private http: HttpClient) {

  }

  public salvar(tarefa: Tarefa): Promise<Tarefa> {

    const headers = new HttpHeaders()
      .append('Authorization', 'Basic ZXNpZzp0ZXN0ZQ==')
      .append('Content-Type', 'application/json');

      tarefa.deadline?.toISOString();

      return this.http.post<Tarefa>(this.tarefaUrlListar, JSON.stringify(tarefa), { headers })
      .toPromise()
      .then(response => response);

  }

  


}
