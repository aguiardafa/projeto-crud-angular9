import { ProdutoDeletarComponent } from './components/produto/produto-deletar/produto-deletar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';
import { ProdutoCriarComponent } from './components/produto/produto-criar/produto-criar.component';
import { ProdutoListar2Component } from './components/produto/produto-listar2/produto-listar2.component';
import { ProdutoAtualizarComponent } from './components/produto/produto-atualizar/produto-atualizar.component';
import { ProdutoDetalharComponent } from './components/produto/produto-detalhar/produto-detalhar.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "produtos",
    component: ProdutoCrudComponent
  },
  {
    path: "produtos/criar",
    component: ProdutoCriarComponent
  },
  {
    path: "listar2",
    component: ProdutoListar2Component
  },
  {
    path: "produtos/atualizar/:id",
    component: ProdutoAtualizarComponent
  },
  {
    path: "produtos/deletar/:id",
    component: ProdutoDeletarComponent
  },
  {
    path: "produtos/detalhar/:id",
    component: ProdutoDetalharComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
