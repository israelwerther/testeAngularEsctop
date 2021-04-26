import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { CredcoopCrudComponent } from './views/credcoop-crud/credcoop-crud.component';
import { EsctopCrudComponent } from './views/esctop-crud/esctop-crud.component';
import { EmprestimoCrudComponent } from './views/emprestimo-crud/emprestimo-crud.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductCrudComponent
  },
  {
    path: 'products/create',
    component: ProductCreateComponent
  },
  {
    path: 'credcoop',
    component: CredcoopCrudComponent
  },
  {
    path: 'esctop',
    component: EsctopCrudComponent
  },
  {
    path: 'emprestimo',
    component: EmprestimoCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
