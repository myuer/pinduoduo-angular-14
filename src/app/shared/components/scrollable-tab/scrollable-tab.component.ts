import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface IMenu {
  id: number;
  title: string;
  link: string;
}
interface addFunc {
  (x: number, y: number): number
}

interface Dict {
  [key: string]: string
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollableTabComponent implements OnInit {
  @Output() tabSelected = new EventEmitter();
  @Input() selectedTabLink: string;
  @Input() menu: IMenu[] = [];


  
  constructor() { }

  ngOnInit() {
  }


  // 声明函数
  add: addFunc = (x, y) => x + y;
  // 声明字典
  dict: Dict = { a: '1', b: '2' }

  // 自定义 NgForOf 如何唯一标识迭代中的条目,并需要返回此项的唯一标识符, 性能提升
  trackFn(index: number, menu: IMenu) {
    return menu.title;
  }

  // 选中的menu
  handleTabSelected(index: number) {
    this.tabSelected.emit(this.menu[index])
  }

}

