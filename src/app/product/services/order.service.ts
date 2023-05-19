import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IProductVariant } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getProductVariantsByProductId(productId: string) {
    return this.http.get<IProductVariant[]>(
      `${environment.baseUrl}/productVariants`,
      {
        params: {
          _expand: 'product',
          _embed: 'productVariantImages',
          productId
        }
      }
    );
  }
}
