import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './auth.service';
import { ListaComponent } from './produtos/lista/lista.component';
import { EmpresaComponent } from './empresa/empresa/empresa.component';
import { ProdutosComponent } from './produtos/produtos/produtos.component';
import { LojaComponent } from './produtos/loja/loja.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'loja', component: LojaComponent },
  { path: 'list', component: ListaComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
