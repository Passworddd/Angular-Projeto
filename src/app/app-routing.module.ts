import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreatComponent } from './components/product-creat/product-creat.component';
import { ProductLeituraComponent } from './components/product-leitura/product-leitura.component';
import { ProductReadComponent } from './components/product-read/product-read.component';
import { HomeComponent } from './views/home/home.component';



const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "products",
    component: ProductReadComponent
  },{
    path: "criarp",
    component: ProductCreatComponent
  },{
    path: "lista",
    component: ProductLeituraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
