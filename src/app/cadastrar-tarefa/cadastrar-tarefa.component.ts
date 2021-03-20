import { Component, OnInit } from '@angular/core';
import { flushMicrotasks } from '@angular/core/testing';
import { Form, FormControl, NgControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CadastrarTarefaService } from './cadastrar-tarefa.service';
import { Prioridade } from './Prioridade';
import { Tarefa } from './Tarefa';


@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent {

  prioridades: Prioridade[];

  select: Prioridade;

  tarefa = new Tarefa()

  constructor(
    private service: CadastrarTarefaService,
    private toastr: ToastrService,
    private route: ActivatedRoute

  ) {
    this.prioridades = [
      { name: 'Baixo', prioridade: 'BAIXA' },
      { name: 'Medio', prioridade: 'MEDIA' },
      { name: 'Alto', prioridade: 'ALTA' }

    ];

    this.select = { name: "", prioridade: "" }
  }

  ngOnInit() {
    this.select = this.prioridades[0];

    const codigoTarefa = this.route.snapshot.params['codigo'];

    if (codigoTarefa) {

      this.buscarPorId(codigoTarefa);

    }
    
  }
  
  public buscarPorId(codigo: number) {
    this.service.buscarPorId(codigo)
    .then(tarefa => {

      this.tarefa = tarefa;

    })

  }

  salvar(form: FormControl) {

    this.tarefa.prioridade = this.select.prioridade

    this.service.salvar(this.tarefa)
      .then(() => null)

    form.reset;
    this.tarefa = new Tarefa();

    this.toastr.success('Tarefa cadastrada com sucesso');


  }


}

