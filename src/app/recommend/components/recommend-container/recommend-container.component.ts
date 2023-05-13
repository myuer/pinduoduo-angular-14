import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IAd, IProduct } from 'src/app/home';
import { HomeService } from 'src/app/home/services';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendContainerComponent implements OnInit {
  ad$: Observable<IAd>;
  products$: Observable<IProduct[]>;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.ad$ = this.homeService.getAdByTab('men').pipe(
      filter(ads => ads.length > 0),
      map(ads => ads[0])
    )

    this.products$ = this.homeService.getProductByTab('men');
  }

}
