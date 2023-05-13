import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/home';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {
  @Input() product: IProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
