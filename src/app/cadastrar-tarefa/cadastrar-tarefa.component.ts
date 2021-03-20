import { Component, OnInit } from '@angular/core';
import { flushMicrotasks } from '@angular/core/testing';
import { Form, FormControl, NgControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorHandlerService } from '../handler/error-handler.service';
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
    private route: ActivatedRoute,
    private erroHandler: ErrorHandlerService

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

  id = this.route.snapshot.params['codigo']

  public buscarPorId(codigo: number) {
    this.service.buscarPorId(codigo)
      .then(tarefa => {

        this.tarefa = tarefa;

      })

  }

  get editando() {

    return Boolean(this.id)

  }

  public salvar(form: FormControl) {

    if (this.editando) {

      this.atualizarTarefa(form);

    } else {

      this.adicionarTarefa(form);

    }

  }

  public adicionarTarefa(form: FormControl) {

    this.tarefa.prioridade = this.select.prioridade

    this.service.salvar(this.tarefa)
      .then(() => {
        this.toastr.success('Tarefa cadastrada com sucesso');
      })
      .catch(erro => this.erroHandler.handle(erro));

    form.reset;
    this.tarefa = new Tarefa();

  }

  public atualizarTarefa(form: FormControl) {

    this.service.atualizarTarefa(this.id, this.tarefa)
      .then(() => {
        
        this.toastr.success('Tarefa atualizada com sucesso');
      })
      .catch(erro => this.erroHandler.handle(erro));

    form.reset;
    this.tarefa = new Tarefa();

    
  }


}

