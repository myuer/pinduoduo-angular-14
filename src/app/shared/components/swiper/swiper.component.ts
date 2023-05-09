import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Confirmable, Emoji } from '../../decorators';

export interface IImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

class MyClass<T> {
  zeroValue: T;
  constructor(zeroValue: T){
     this.zeroValue = zeroValue
  };
  add: (x: T, y: T) => T;
}

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwiperComponent implements OnInit, AfterViewInit {
  @Input() sliders: IImageSlider[] = [];
  @Input() sliderHeight = '160px';
  
  @ViewChildren('img') imgs: QueryList<ElementRef>
  @ViewChild('imageSlider') imgSlider: ElementRef;
  @Input() intervalBySeconds = 2000;
  selectedIndex = 0;

  intervalId;

   // 注解可以应用于变量，方法和类
   @Emoji() result = '您好';
   
  constructor(private rd2: Renderer2) { }

  ngOnInit() {
    let myClass = new MyClass<number>(12);
    console.log(myClass);
    
  }

  /**
   * dom 已挂载
  */
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.imgs.forEach(item => (item.nativeElement.style.height = '100px'))
    // this.imgs.forEach(item => {
    //   this.rd2.setStyle(item.nativeElement, 'height', '100px')
    // })

    this.intervalId = setInterval(() => {

      // this.selectedIndex = this.selectedIndex + 1 == this.sliders.length ? 0 : ++this.selectedIndex;

      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        // this.selectedIndex * this.imgSlider.nativeElement.children[0].width
        (this.getIndex(++this.selectedIndex) *
          this.imgSlider.nativeElement.scrollWidth) /
        this.sliders.length
      );
    }, this.intervalBySeconds);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId)
  }

  getIndex(idx: number): number {
    return idx >= 0
      ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }


  handleScroll(ev) {
    const ratio =
      ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length);
    this.selectedIndex = Math.round(ratio);
  }

  // 注解也可以接受参数
  @Confirmable("已经点击，是否确认执行？")
  modal(){
    console.log("已点击");
  }


  
}
