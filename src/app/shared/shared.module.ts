import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BackBtnComponent, BottomBarComponent, CountDownComponent, HorizontalGridComponent, ProductCardComponent, ProductTileComponent, ScrollableTabComponent, SwiperComponent, VerticalGridComponent } from './components';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from './directives';
import { AgoPipe } from './pipes';
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
    BackBtnComponent,


    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe,
    ProductTileComponent,
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
    ProductTileComponent,
    BackBtnComponent,
    
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe
  ]
})
export class SharedModule { }
