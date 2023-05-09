import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BottomBarComponent, CountDownComponent, ScrollableTabComponent, SwiperComponent } from './components';
import { HorizontalGridComponent } from './components/horizontal-grid/horizontal-grid.component';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective } from './directives';
import { AgoPipe } from './pipes';


@NgModule({
  declarations: [
    ScrollableTabComponent,
    SwiperComponent,
    HorizontalGridComponent,
    CountDownComponent,
    BottomBarComponent,


    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
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


    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe
  ]
})
export class SharedModule { }
