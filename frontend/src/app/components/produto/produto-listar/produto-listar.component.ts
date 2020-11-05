import { ProdutoService } from './../produto.service';
import { Produto } from './../produto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent implements OnInit {

  produtos: Produto[];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  colunasParaExibicao = ['colunaId', 'colunaNome', 'colunaPreco', 'colunaAcoes'];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.findAll().subscribe(produtos => {
      this.produtos = produtos
    })
  }

}
