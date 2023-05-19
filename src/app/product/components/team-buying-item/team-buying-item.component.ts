import { Component, Input, OnInit } from '@angular/core';
import { IGroupOrder } from '../../interface';

@Component({
  selector: 'app-team-buying-item',
  templateUrl: './team-buying-item.component.html',
  styleUrls: ['./team-buying-item.component.css']
})
export class TeamBuyingItemComponent implements OnInit {
  @Input() order: IGroupOrder;
  startDate: Date;
  futureDate: Date;

  constructor() { }

  ngOnInit(): void {
    this.startDate = this.order.startAt;
    // 24h*3600s*1000ms
    this.futureDate = new Date(this.order.startAt.getTime() + 24 * 3600 * 1000 - 1);
  }

}
