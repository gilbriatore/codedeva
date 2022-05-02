import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  listar()  {
    return;
  }

  buscarPorCodigo(codigo : number){
    return;
  }

  salvar(tipo : Categoria) {
    return;
  }

  atualizar(codigo: number, categoria : Categoria)  {
    return;
  }

  excluir(codigo? : number) {
    return;
  }
}