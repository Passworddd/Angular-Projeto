import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-leitura',
  templateUrl: './product-leitura.component.html',
  styleUrls: ['./product-leitura.component.css']
})
export class ProductLeituraComponent implements OnInit {

  products!: Product[]

  constructor(
    private producService: ProductService
  ) { }

  ngOnInit(): void {
    this.producService.read().subscribe(products=>{
      this.products = products
    })
  }

}
