import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Product, ProductRequest } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products?: Product[];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().pipe(take(1)).subscribe((products: any) => {
      this.products = products.products; 
    });
  }
}