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
import { JwtModule } from "@auth0/angular-jwt";


import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { ListagemTarefasComponent } from './listagem-tarefas/listagem-tarefas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { RouterModule, Routes } from '@angular/router';
import { ListagemTarefasService } from './listagem-tarefas/listagem-tarefas.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { httpInterceptorProviders } from './http-interceptors';
import { LoginGuard } from './guard/login.guard';
import { AuthGuard } from './guard/auth.guard';
import { TooltipModule } from 'primeng/tooltip';


export function tokenGetter() {
  return localStorage.getItem("access_token");
}

const routes: Routes = [

  { path: '', redirectTo: 'listagem', pathMatch: 'full' },
  { path: 'listagem', canActivate: [AuthGuard], component: ListagemTarefasComponent },
  { path: 'listagem/cadastrar', canActivate: [AuthGuard], component: CadastrarTarefaComponent },
  { path: 'listagem/cadastrar/:codigo', canActivate: [AuthGuard], component: CadastrarTarefaComponent },
  { path: 'login', canActivate: [LoginGuard], component: LoginFormComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ListagemTarefasComponent,
    NavbarComponent,
    CadastrarTarefaComponent,
    LoginFormComponent
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
    ReactiveFormsModule,
    JwtModule,
    TooltipModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    
    
    
  ],
  providers: [ListagemTarefasService, LoginGuard, AuthGuard, httpInterceptorProviders], 
  bootstrap: [AppComponent]
})
export class AppModule { }
