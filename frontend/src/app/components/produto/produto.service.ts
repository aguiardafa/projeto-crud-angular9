import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Produto } from './produto.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrlAPI = "http://localhost:3001/produtos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  exibirMensagem(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrlAPI, produto).pipe(
      map((obj) => obj),
      catchError((e) => this.tratarErro(e))
    );
  }

  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrlAPI).pipe(
      map((obj) => obj),
      catchError((e) => this.tratarErro(e))
    );
  }

  findById(id: number): Observable<Produto> {
    const url = `${this.baseUrlAPI}/${id}`;
    return this.http.get<Produto>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.tratarErro(e))
    );
  }

  update(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrlAPI}/${produto.id}`;
    return this.http.put<Produto>(url, produto).pipe(
      map((obj) => obj),
      catchError((e) => this.tratarErro(e))
    );
  }

  delete(id: number): Observable<Produto> {
    const url = `${this.baseUrlAPI}/${id}`;
    return this.http.delete<Produto>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.tratarErro(e))
    );
  }

  tratarErro(e: any): Observable<any> {
    this.exibirMensagem("Ocorreu um erro de acesso!", true);
    return EMPTY
  }
}
