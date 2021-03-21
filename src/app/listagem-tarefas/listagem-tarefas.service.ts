import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from '../cadastrar-tarefa/Tarefa';

export interface TarefaFiltro {

  numero: string
  titulo: string;
  responsavel: string;
  concluido: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class ListagemTarefasService {

  tarefaUrlListar = 'http://localhost:9091/tarefas/listar'
  tarefaUrlDeletar = 'http://localhost:9091/tarefas/deletar'
  tarefaUrlMudarSituacao = 'http://localhost:9091/tarefas/finalizado'


  constructor(private http: HttpClient) {

  }

  token = window.localStorage.getItem('token');

  public pesquisar(filtro: TarefaFiltro): Promise<any> {

    return this.http.get(`${this.tarefaUrlListar}${this.paramsToURLSearch(filtro)}`)
      .toPromise()
      .then(response => response)

  }

  public paramsToURLSearch(values: any): string {
    const params = new URLSearchParams()
    for (const key in values) {
      if (values[key] !== '' && values[key] !== 'undefined' && values[key] != null) {
        params.set(key, values[key])
      }
    }
    return `?${params.toString()}`
  }


  public excluir(codigo: number): Promise<any> {

    return this.http.delete(`${this.tarefaUrlDeletar}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  public mudarSituacao(codigo: number, corpo: any): Promise<any>{

    const headers = new HttpHeaders()
      .append('Authorization', 'Basic ZXNpZzp0ZXN0ZQ==')
      .append('Content-Type', 'application/json');

      corpo = 'Concluida'

    return this.http.patch(`${this.tarefaUrlMudarSituacao}/${codigo}`, corpo)
      .toPromise()
      .then(() => null);

  }


}


