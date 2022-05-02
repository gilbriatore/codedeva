import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class CategoriaExcluirComponent implements OnInit {

  categoria : Categoria= new Categoria();

  constructor() {}

  ngOnInit(): void {
  }

  excluirCategoria() {

  }

}