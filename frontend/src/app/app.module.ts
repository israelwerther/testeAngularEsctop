import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templates/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { RedDirective } from "./directives/red.directive";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CredcoopCrudComponent } from './views/credcoop-crud/credcoop-crud.component';
import { EsctopCrudComponent } from './views/esctop-crud/esctop-crud.component';
import { EmprestimoCrudComponent } from './views/emprestimo-crud/emprestimo-crud.component';
import { CredcoopCreateComponent } from './components/credcoop/credcoop-create/credcoop-create.component';
import { EsctopCreateComponent } from './components/esctop/esctop-create/esctop-create.component';
import { EmprestimoCreateComponent } from './components/emprestimo/emprestimo-create/emprestimo-create.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  // Aqui vai os components, diretivas e pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ProductCreateComponent,
    CredcoopCrudComponent,
    EsctopCrudComponent,
    EmprestimoCrudComponent,
    CredcoopCreateComponent,
    EsctopCreateComponent,
    EmprestimoCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
