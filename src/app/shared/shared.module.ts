import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollableTabComponent, SwiperComponent } from './components';


@NgModule({
  declarations: [
    ScrollableTabComponent,
    SwiperComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    SwiperComponent
  ]
})
export class SharedModule { }
