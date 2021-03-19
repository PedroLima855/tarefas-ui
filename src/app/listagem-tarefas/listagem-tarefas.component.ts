import { Component, OnInit, ViewChild } from '@angular/core';
import { ListagemTarefasService, TarefaFiltro } from './listagem-tarefas.service';
import { Situacao } from './Situacao';


@Component({
  selector: 'app-listagem-tarefas',
  templateUrl: './listagem-tarefas.component.html',
  styleUrls: ['./listagem-tarefas.component.css']
})
export class ListagemTarefasComponent implements OnInit {

  situacao: Situacao[];
  numero: string
  titulo: string;
  responsavel: string;

  @ViewChild('tabela') 
  tabela: any;

  select: Situacao;

  constructor(private service: ListagemTarefasService) {
      this.situacao = [
          {name: 'Em andamento', status: 'Andamento'},
          {name: 'Concluida', status: 'Concluida'}
      ];

      this.select={name:"", status: ""}
      this.titulo="";
      this.numero="";
      this.responsavel="";
  }

  tarefasList: any = []

  ngOnInit(){
    this.pesquisar();
    this.select = this.situacao[0];
  }

  public pesquisar(){

    const filtro: any = {

      titulo: this.titulo,
      numero: this.numero,
      responsavel: this.responsavel,
      situacao: this.select.status

    }

    this.service.pesquisar(filtro)
    .then(tarefas => this.tarefasList = tarefas);
  }

  public excluir(tarefa: any){
    this.service.excluir(tarefa.id)
    .then(() => {
      this.tabela.first = 0;
      this.pesquisar()
    });

  }
  

}
