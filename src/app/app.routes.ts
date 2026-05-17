import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutoListagemComponent } from './pages/produto-listagem/produto-listagem.component';
import { ProdutoFormComponent } from './pages/produto-form/produto-form.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'produtos', component: ProdutoListagemComponent },
  { path: 'produtos/novo', component: ProdutoFormComponent },
  { path: 'produtos/editar/:id', component: ProdutoFormComponent },
  { path: '**', redirectTo: 'home' }
];
