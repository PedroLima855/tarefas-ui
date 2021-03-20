import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ListagemTarefasService } from './listagem-tarefas.service';
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

  constructor(private service: ListagemTarefasService, private toastr: ToastrService) {

    this.situacao = [
      { name: 'Em andamento', status: 'Andamento' },
      { name: 'Concluida', status: 'Concluida' }
    ];

    this.select = { name: "", status: "" }
    this.titulo = "";
    this.numero = "";
    this.responsavel = "";
  }

  tarefasList: any = []

  ngOnInit() {
    this.pesquisar();
    this.select = this.situacao[0];
  }

  public pesquisar() {

    const filtro: any = {

      titulo: this.titulo,
      numero: this.numero,
      responsavel: this.responsavel,
      situacao: this.select.status

    }

    this.service.pesquisar(filtro)
      .then(tarefas => this.tarefasList = tarefas);
  }

  public excluir(tarefa: any) {
    this.service.excluir(tarefa.id)
      .then(() => {
        this.toastr.success('Tarefa excluida com sucesso');
        this.tabela.first = 0;
        this.pesquisar()
      });

  }

  public mudarSituacao(tarefa: any){
    this.service.mudarSituacao(tarefa.id, tarefa)
      .then(() => {
        this.toastr.success('Tarefa concluida');
        this.tabela.first = 0;
        this.pesquisar()
      });


  }

  

}
