import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produto-atualizar',
  templateUrl: './produto-atualizar.component.html',
  styleUrls: ['./produto-atualizar.component.css']
})
export class ProdutoAtualizarComponent implements OnInit {

  produto: Produto;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.produtoService.findById(id).subscribe(produto => {
      this.produto = produto;
    });
  }

  atualizarProduto(): void {
    this.produtoService.update(this.produto).subscribe(() => {
      this.produtoService.exibirMensagem("Produto Atualizado com sucesso!!!");
      this.router.navigate(['/produtos']);
    })

  }

  cancelar(): void {
    this.router.navigate(['/produtos']);
  }

}
