import { Component, Input, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';


@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  @Input() startTime: Date = new Date();
  @Input() endTime: Date;
  countdown$: Observable<string>;
  milliseconds2seconds = 1000;

  constructor() { }

  ngOnInit() {
    this.countdown$ = interval(1000).pipe(
      // 计算差值
      map(sec => this.diffInSec(this.startTime, this.endTime) - sec),
      // 不满足条件就completed
      takeWhile(diffTime => diffTime >= 0),
      map(  
        (diffTime) => ({
          day: Math.floor(diffTime / (3600 * 24)),
          hour: Math.floor((diffTime / 3600) % 24),
          minute: Math.floor((diffTime / 60) % 60),
          second: Math.floor(diffTime % 60),
        })
      ),
      map(({ day, hour, minute, second }) => `${day}天 ${String(hour).padStart(2, '0')}:${minute}:${second}`)
    )

  }



  private diffInSec = (startTime: Date, endTime: Date) => {
    const diff = endTime.getTime() - startTime.getTime();
    return Math.floor(diff / this.milliseconds2seconds)
  }
}
