import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './pages/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './pages/cliente-form/cliente-form.component';

const routes: Routes = [
  { path: '', component: ClienteListComponent },
  { path: 'create', component: ClienteFormComponent  },
  { path: 'edit/:id', component: ClienteFormComponent  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
