import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IImageSlider, IChannel, IMenu } from 'src/app/shared/components';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {

  }
  getBanners() {
    return this.http.get<IImageSlider[]>(`${environment.baseUrl}/banners`);
  }
  getChannels() {
    return this.http.get<IChannel[]>(`${environment.baseUrl}/channels`);
  }
  getTabs() {
    return this.http.get<IMenu[]>(`${environment.baseUrl}/tabs`);
  }
}
