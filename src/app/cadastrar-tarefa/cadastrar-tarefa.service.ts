import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from './Tarefa';


@Injectable({
  providedIn: 'root'
})
export class CadastrarTarefaService {

  tarefaUrlListar = 'http://localhost:9091/tarefas/listar'
  tarefaUrlSalvar = 'http://localhost:9091/tarefas/salvar'
  tarefaUrlAtualizar = 'http://localhost:9091/tarefas/atualizar'

  constructor(private http: HttpClient) {

  }

  public salvar(tarefa: Tarefa): Promise<Tarefa> {

   
      return this.http.post<Tarefa>(this.tarefaUrlSalvar, JSON.stringify(tarefa))
      .toPromise()
      .then(response => response);

  }

  public atualizarTarefa(codigo: number, tarefa: Tarefa): Promise<Tarefa>{

      return this.http.put<Tarefa>(`${this.tarefaUrlAtualizar}/${codigo}`, tarefa)
      .toPromise()
      .then(response => response);

  }

  public buscarPorId(codigo: number): Promise<any>{

    return this.http.get(`${this.tarefaUrlListar}/${codigo}`)
      .toPromise()
      .then(response => response);

  }

  


}
