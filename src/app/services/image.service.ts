import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public profile: string = "assets/images/logos/luxy_nics_logo.jpg";

  constructor() { }
}
