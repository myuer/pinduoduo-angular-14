import { formatDate } from '@angular/common';
import { AfterContentChecked, Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit, AfterContentChecked {
  @ViewChild('timeRef', {static: true}) timeRef: ElementRef;
  date: Date;
  obj = { id: '112', name: 'xx手机', model: '全面屏' };
  price = 34234.232434;
  data = [1, 2, 3, 4, 5];

  constructor(
    private ngZone: NgZone,
    private rd2: Renderer2
  ) { }

  ngOnInit() {
    this.date = this.minusDays(new Date(), 30);
  }
  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

  minusMonths(date: Date, months: number) {
    const result = new Date(date);
    result.setMonth(result.getMonth() - months);
    return result;
  }


  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.ngZone.runOutsideAngular(()=> {
      setInterval(()=> {
        this.rd2.setProperty(this.timeRef.nativeElement, 'innerText', formatDate(Date.now(), 'HH:mm:ss', 'zh-Hans'))
      },500)
    })
  }
}
