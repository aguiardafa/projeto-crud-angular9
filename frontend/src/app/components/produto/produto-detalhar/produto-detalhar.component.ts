import { ProdutoService } from './../produto.service';
import { Produto } from './../produto.model';
import { HeaderService } from './../../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhar',
  templateUrl: './produto-detalhar.component.html',
  styleUrls: ['./produto-detalhar.component.css']
})
export class ProdutoDetalharComponent implements OnInit {

  produto: Produto;

  constructor(
    private produtoService: ProdutoService, 
    private router: Router,
    private route: ActivatedRoute, 
    private headerService: HeaderService
  ) {
    headerService.header = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/produtos'
    }
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.produtoService.findById(id).subscribe(produto => {
      this.produto = produto;
    });
  }

  voltar(): void {
    this.router.navigate(['/produtos']);
  }

}
