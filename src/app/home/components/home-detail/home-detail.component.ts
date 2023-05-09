import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IChannel, IImageSlider, IMenu } from 'src/app/shared/components';
import { HomeService } from '../../services';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private homeService: HomeService, private cd: ChangeDetectorRef) { }
  selectedTabLink$: Observable<string>;
  imageSliders$: Observable<IImageSlider[]>;
  channels$: Observable<IChannel[]>;
  startTime: Date = new Date('2023/05/09');
  endTime: Date = new Date();
  sub: Subscription;


  ngOnInit(): void {
    this.channels$ = this.homeService.getChannels();
    this.imageSliders$ = this.homeService.getBanners();

    this.selectedTabLink$ = this.route.paramMap
      .pipe(
        filter(params => params.has('tabLink')),
        map(params => params.get('tabLink'))
      )

    this.sub = this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
