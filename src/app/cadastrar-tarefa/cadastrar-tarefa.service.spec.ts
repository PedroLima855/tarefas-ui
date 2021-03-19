import { TestBed } from '@angular/core/testing';

import { CadastrarTarefaService } from './cadastrar-tarefa.service';

describe('CadastrarTarefaService', () => {
  let service: CadastrarTarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarTarefaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
