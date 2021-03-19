import { TestBed } from '@angular/core/testing';

import { ListagemTarefasService } from './listagem-tarefas.service';

describe('ListagemTarefasService', () => {
  let service: ListagemTarefasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListagemTarefasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
