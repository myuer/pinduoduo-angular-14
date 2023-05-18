import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackBtnComponent implements OnInit {
  float = true;
  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  get imageUrl() {
    return this.float ? `/assets/icons/back_light.png` : `/assets/icons/back_dark.png`;
  }

  handleBack() {
    this.location.back();
  }
}
