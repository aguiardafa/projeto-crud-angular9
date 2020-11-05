import { HeaderService } from './../../template/header/header.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProdutoListar2DataSource, ProdutoListar2Item } from './produto-listar2-datasource';

@Component({
  selector: 'app-produto-listar2',
  templateUrl: './produto-listar2.component.html',
  styleUrls: ['./produto-listar2.component.css']
})
export class ProdutoListar2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProdutoListar2Item>;
  dataSource: ProdutoListar2DataSource;

  constructor(private headerService: HeaderService) {
    headerService.header = {
      title: 'Tabela Exemplo Schematics Material',
      icon: 'web',
      routeUrl: '/listar2'
    }
  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ProdutoListar2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
