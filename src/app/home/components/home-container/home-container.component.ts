import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMenu, IImageSlider, IChannel } from 'src/app/shared/components';
import { HomeService } from '../../services';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {
  constructor(
    private router: Router,
    private homeService: HomeService,
    private route: ActivatedRoute
  ) { }
  menu$: Observable<IMenu[]>;
  selectedTabLink$: Observable<string>;
  ngOnInit(): void {
    this.menu$ = this.homeService.getTabs();
    this.selectedTabLink$ = this.route.firstChild.paramMap
      .pipe(
        tap(params => console.log(params,'++++++')),
        filter(params => params.has('tabLink')),
        map(params => params.get('tabLink'))
      )
  }

  handleTabSelected(topMenu: IMenu) {
    this.router.navigate(['home', topMenu.link]);
  }
}
