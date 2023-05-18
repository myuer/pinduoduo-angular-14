import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductContainerComponent } from './components';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductContainerComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
