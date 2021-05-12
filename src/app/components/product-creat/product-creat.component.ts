import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';


@Component({
  selector: 'app-product-creat',
  templateUrl: './product-creat.component.html',
  styleUrls: ['./product-creat.component.css']
})
export class ProductCreatComponent implements OnInit {

  product: Product = {
    name: 'Produto 1',
    price: 19.2,
  }


  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }
  
  createProduct(): void {
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage(`Produdo: ${this.product.name}`);
    });
  }
  
  cancelar(): void {
    this.router.navigate(['/products'])
  }

}
