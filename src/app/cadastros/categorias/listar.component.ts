import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';

import data from 'src/app/data/categorias.json';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})  
export class CategoriaListarComponent implements OnInit {

  categorias: Categoria[] = data;
  displayedColumns: string[] = ['codigo', 'nome', 'descricao', 'acoes'];

  constructor() {}

   ngOnInit(): void {
  }
  
}
