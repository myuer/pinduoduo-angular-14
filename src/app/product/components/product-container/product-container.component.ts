import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OrderService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IGroupOrder, IProductVariant } from '../../interface';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit {
  variants$: Observable<IProductVariant[]>; // product 种类
  selectedIdx = 0; // 默认选中第一个种类
  groupOrders: IGroupOrder[] = [];

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    const productId$ = this.route.paramMap.pipe(
      filter(params => params.has('productId')),
      map(params => params.get('productId'))
    )
    this.variants$ = productId$.pipe(
      switchMap(productId => this.orderService.getProductVariantsByProductId(productId))
    )

    this.groupOrders = [
      {
        id: 1,
        productId: 2,
        startBy: 'zhangsan',
        avatar: 'assets/avatars/avatar001.png',
        startAt: new Date(),
        remainingNumber: 2
      },
      {
        id: 2,
        productId: 2,
        startBy: 'lisi',
        avatar: 'assets/avatars/avatar002.png',
        startAt: new Date(2019, 2, 20, 10, 10, 10),
        remainingNumber: 1
      }
    ];

  }

}
