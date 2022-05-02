import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class CategoriaEditarComponent implements OnInit {

  categoria : Categoria = new Categoria();

  constructor() {}

  ngOnInit(): void {
    
  }

  atualizarCategoria() {
  }
}
