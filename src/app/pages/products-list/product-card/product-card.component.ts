import { Component, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
addToCart() {
throw new Error('Method not implemented.');
}
  product = input.required<Product>();
}
