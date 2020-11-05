import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';
import { RedDirective } from './directives/red.directive';
import { LoopDirective } from './directives/loop.directive';
import { ProdutoCriarComponent } from './components/produto/produto-criar/produto-criar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProdutoListarComponent } from './components/produto/produto-listar/produto-listar.component';
import { ProdutoListar2Component } from './components/produto/produto-listar2/produto-listar2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ProdutoAtualizarComponent } from './components/produto/produto-atualizar/produto-atualizar.component';
import { ProdutoDeletarComponent } from './components/produto/produto-deletar/produto-deletar.component';
import { ProdutoDetalharComponent } from './components/produto/produto-detalhar/produto-detalhar.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProdutoCrudComponent,
    RedDirective,
    LoopDirective,
    ProdutoCriarComponent,
    ProdutoListarComponent,
    ProdutoListar2Component,
    ProdutoAtualizarComponent,
    ProdutoDeletarComponent,
    ProdutoDetalharComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
