import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { CadastroComponent } from './user/cadastro/cadastro.component';
import { AtualizarComponent } from './user/atualizar/atualizar.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { EquipeComponent } from './empresa/equipe/equipe.component';
import { HomeEmpresaComponent } from './home/home-empresa/home-empresa.component';
import { HomeComponent } from './home/home/home.component';
import { AuthService, AuthGuard, AuthInterceptor } from './auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './produtos/lista/lista.component';
import { EmpresaComponent } from './empresa/empresa/empresa.component';
import { ProdutosComponent } from './produtos/produtos/produtos.component';
import { LojaComponent } from './produtos/loja/loja.component';
import { IfoodComponent } from './produtos/ifood/ifood.component';
import { RestaurantesComponent } from './produtos/restaurantes/restaurantes.component';
import { FastfoodComponent } from './produtos/fastfood/fastfood.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    AtualizarComponent,
    NavbarComponent,
    FooterComponent,
    EquipeComponent,
    HomeEmpresaComponent,
    HomeComponent,
    ListaComponent,
    EmpresaComponent,
    ProdutosComponent,
    LojaComponent,
    IfoodComponent,
    RestaurantesComponent,
    FastfoodComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
