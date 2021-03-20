import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarTarefasComponent } from './atualizar-tarefas.component';

describe('AtualizarTarefasComponent', () => {
  let component: AtualizarTarefasComponent;
  let fixture: ComponentFixture<AtualizarTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarTarefasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
