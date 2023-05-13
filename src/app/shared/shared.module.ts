import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BottomBarComponent, CountDownComponent, ScrollableTabComponent, SwiperComponent } from './components';
import { HorizontalGridComponent } from './components/horizontal-grid/horizontal-grid.component';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from './directives';
import { AgoPipe } from './pipes';
import { VerticalGridComponent } from './components/vertical-grid/vertical-grid.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TagDirective } from './directives/tag.directive';
import { AvatarDirective } from './directives/avatar.directive';


@NgModule({
  declarations: [
    ScrollableTabComponent,
    SwiperComponent,
    HorizontalGridComponent,
    CountDownComponent,
    BottomBarComponent,
    VerticalGridComponent,
    ProductCardComponent,


    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    SwiperComponent,
    HorizontalGridComponent,
    CountDownComponent,
    BottomBarComponent,
    VerticalGridComponent,
    ProductCardComponent,

    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe
  ]
})
export class SharedModule { }
