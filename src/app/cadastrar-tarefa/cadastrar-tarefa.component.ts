import { Component, OnInit } from '@angular/core';
import { Prioridade } from './Prioridade';


@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent  {

  
  prioridades: Prioridade[];

  select: Prioridade;

  constructor() {
      this.prioridades = [
          {name: 'Baixo'},
          {name: 'Madio'},
          {name: 'Alto'}
      ];

      this.select={name:""}
  }


}

