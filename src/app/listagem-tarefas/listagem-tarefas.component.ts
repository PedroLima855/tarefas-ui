import { Component, OnInit } from '@angular/core';
import { Responsavel } from './Responsavel';


@Component({
  selector: 'app-listagem-tarefas',
  templateUrl: './listagem-tarefas.component.html',
  styleUrls: ['./listagem-tarefas.component.css']
})
export class ListagemTarefasComponent  {

  responsaveis: Responsavel[];

  select: Responsavel;

  constructor() {
      this.responsaveis = [
          {name: 'Em andamento'},
          {name: 'Concluido'}
      ];

      this.select={name:""}
  }

  tarefas: any = [

    { numero: '1', titulo: 'Jogar', responsavel: 'Pedro'},

    { numero: '2', titulo: 'Lavar louça', responsavel: 'Pedro'},

    { numero: '3', titulo: 'Alimentar tartaruga', responsavel: 'Pedro'},

    { numero: '4', titulo: 'Jogar', responsavel: 'Ester'},

    { numero: '5', titulo: 'Tirar lixo', responsavel: 'Pedro',},

    { numero: '6', titulo: 'Almoçar', responsavel: 'Todos'},

    { numero: '7', titulo: 'Programar', responsavel: 'pedro'},

    { numero: '8', titulo: 'Fazer culto', responsavel: 'Vanessa'},

    { numero: '9', titulo: 'jogar', responsavel: 'Vanessa'}
  ]
 

}
