import { Produto } from './../produto.model';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-criar',
  templateUrl: './produto-criar.component.html',
  styleUrls: ['./produto-criar.component.css']
})
export class ProdutoCriarComponent implements OnInit {

  produto: Produto = {
    nome: '',
    preco: null
  }

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
  }

  criarProduto(): void{
    this.produtoService.create(this.produto).subscribe(() => {
      this.produtoService.exibirMensagem("Produto Salvo com sucesso!!!")
      this.router.navigate(['/produtos'])
    })

  }

  cancelar(): void{
    this.router.navigate(['/produtos'])
  }
}
