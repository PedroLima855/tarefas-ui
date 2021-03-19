import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';





import { AppComponent } from './app.component';
import { ListagemTarefasComponent } from './listagem-tarefas/listagem-tarefas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarTarefaService } from './cadastrar-tarefa/cadastrar-tarefa.service';
import { ListagemTarefasService } from './listagem-tarefas/listagem-tarefas.service';

const routes: Routes = [

  { path: 'listagem', component: ListagemTarefasComponent },
  { path: 'listagem/cadastrar', component: CadastrarTarefaComponent },
  { path: 'listagem/cadastrar/:codigo', component: CadastrarTarefaComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ListagemTarefasComponent,
    NavbarComponent,
    CadastrarTarefaComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    InputTextareaModule,
    CalendarModule,
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
 
    
  ],
  providers: [ListagemTarefasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
