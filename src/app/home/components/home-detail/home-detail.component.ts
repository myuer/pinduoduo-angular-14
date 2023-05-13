import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IChannel, IImageSlider, IMenu } from 'src/app/shared/components';
import { HomeService } from '../../services';
import { Observable, Subscription, of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { IAd, IProduct } from './interface';

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
  ad$: Observable<IAd>;
  products$: Observable<IProduct[]>;
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

    this.ad$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.homeService.getAdByTab(tab)),
      filter(ads => ads.length > 0),
      map(ads => ads[0])
    )

    this.products$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.homeService.getProductByTab(tab))
    )

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
