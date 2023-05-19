import { Component, Input, OnInit } from '@angular/core';
import { IGroupOrder } from '../../interface';

@Component({
  selector: 'app-team-buying-list',
  templateUrl: './team-buying-list.component.html',
  styleUrls: ['./team-buying-list.component.css']
})
export class TeamBuyingListComponent implements OnInit {
  @Input() groupOrders: IGroupOrder[];
  @Input() row = 2; // 只显示2个人在拼单
  constructor() { }

  ngOnInit(): void {
  }

}
