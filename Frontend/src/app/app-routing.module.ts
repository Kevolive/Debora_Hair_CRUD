import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'clientes',
    loadChildren: () => import('./clientes/cliente.module').then(m => m.ClienteModule)
  },

  {
    path: '', redirectTo: 'clientes', pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'clientes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
