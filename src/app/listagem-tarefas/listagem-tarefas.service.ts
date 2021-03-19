import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor(private http: HttpClient) {

  }

  public pesquisar(filtro: TarefaFiltro): Promise<any> {

    const headers = new HttpHeaders()
      .append('Authorization', 'Basic ZXNpZzp0ZXN0ZQ==');

    return this.http.get(`${this.tarefaUrlListar}${this.paramsToURLSearch(filtro)}`, { headers })
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

    const headers = new HttpHeaders()
      .append('Authorization', 'Basic ZXNpZzp0ZXN0ZQ==');

    return this.http.delete(`${this.tarefaUrlDeletar}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);
  }


}


