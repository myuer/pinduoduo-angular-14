import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductContainerComponent, ProductVariantDialogComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { TeamBuyingListComponent } from './components/team-buying-list/team-buying-list.component';
import { TeamBuyingItemComponent } from './components/team-buying-item/team-buying-item.component';


@NgModule({
  declarations: [
    ProductContainerComponent,
    TeamBuyingListComponent,
    TeamBuyingItemComponent,
    ProductVariantDialogComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
