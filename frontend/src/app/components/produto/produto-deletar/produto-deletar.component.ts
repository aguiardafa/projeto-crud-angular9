import { Produto } from './../produto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-deletar',
  templateUrl: './produto-deletar.component.html',
  styleUrls: ['./produto-deletar.component.css']
})
export class ProdutoDeletarComponent implements OnInit {

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

  deletarProduto(): void {
    this.produtoService.delete(this.produto.id).subscribe(() => {
      this.produtoService.exibirMensagem("Produto Deletado com sucesso!!!");
      this.router.navigate(['/produtos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/produtos']);
  }

}
