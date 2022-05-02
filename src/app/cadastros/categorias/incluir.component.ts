import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class CategoriaIncluirComponent implements OnInit {
  
  ngOnInit(): void {
  }
  
  categoria : Categoria = new Categoria();

  constructor() {}

  salvarCategoria() {
  
  }

}
