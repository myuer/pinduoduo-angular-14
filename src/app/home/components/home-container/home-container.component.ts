import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenu, IImageSlider, IChannel } from 'src/app/shared/components';
import { HomeService } from '../../services';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {
  constructor(
    private router: Router,
    private homeService: HomeService
  ) { }
  menu$: Observable<IMenu[]>;
  ngOnInit(): void {
    this.menu$ = this.homeService.getTabs();
    // this.menu = this.homeService.getTabs()
  }

  handleTabSelected(topMenu: IMenu) {
    this.router.navigate(['home', topMenu.link]);
  }
}
