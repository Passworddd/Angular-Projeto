import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Cabeçalho
import { HeaderComponent } from './components/template/header/header.component';
// Roda Pé
import { FooterComponent } from './components/template/footer/footer.component';
// Área de Navegação
import { NavComponent } from './components/template/nav/nav.component';

// Biblioteca Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { FormsModule } from '@angular/forms'
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
// Diretivas
import { RedDirective } from './directived/red.directive';
import { ForDirective } from './directived/for.directive';
import { ProductReadComponent } from './components/product-read/product-read.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCreatComponent } from './components/product-creat/product-creat.component';
// Observer
import { HttpClientModule } from '@angular/common/http'




@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    FooterComponent, 
    NavComponent, 
    RedDirective, ForDirective, ProductReadComponent, HomeComponent, ProductCreatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
