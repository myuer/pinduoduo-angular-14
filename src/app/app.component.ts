import { Component, OnInit } from '@angular/core';
import { BottomBar, BottomBarMap, IBottomBarItem } from './shared/components';
import { Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { DialogService } from './dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  selectedBarIdx$: Observable<number>;

  constructor(private router: Router, private dialogService: DialogService) {

  }

  ngOnInit(): void {
    this.selectedBarIdx$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map((event: NavigationEnd) => {
          const arr = event.url.split('/');
          return arr.length > 1 ? arr[1] : 'home';
        }),
        map(path => this.path2Index(path))
      )
  }

  path2Index = (path: string) => {
    return BottomBarMap.get(path) || 0
  }

  toggleBar(tabbar: IBottomBarItem) {
    this.router.navigate([tabbar.link])
  }
}
