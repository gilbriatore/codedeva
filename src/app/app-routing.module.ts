import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListarComponent } from './cadastros/categorias/listar.component';
import { CategoriaIncluirComponent } from './cadastros/categorias/incluir.component';
import { CategoriaEditarComponent } from './cadastros/categorias/editar.component';
import { CategoriaExcluirComponent } from './cadastros/categorias/excluir.component';

const routes: Routes = [
  { path: '', component: CategoriaListarComponent },
  { path: 'categorias/incluir', component: CategoriaIncluirComponent },
  { path: 'categorias/editar/:codigo', component: CategoriaEditarComponent },
  { path: 'categorias/excluir/:codigo', component: CategoriaExcluirComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
