import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IImageSlider, IChannel, IMenu } from 'src/app/shared/components';
import { environment } from 'src/environments/environment';
import { IAd, IProduct } from '../components';

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

  getAdByTab(tab: string) {
    return this.http.get<IAd[]>(`${environment.baseUrl}/ads`,
      { params: { categories_like: tab } });
  }

  getProductByTab(tab: string) {
    return this.http.get<IProduct[]>(`${environment.baseUrl}/products`,
      { params: { categories_like: tab } });
  }
}
