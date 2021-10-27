import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

import { VCard } from "ngx-vcard";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public businessName: string = "Savannah Picnic by Luxy Nics";
  public personName: string = "Kate Ward"
  public telephone: string = "912-536-7419";
  public email: string = "kate@savannahpicnic.com";

  constructor(public imageService: ImageService) { }

  ngOnInit() {
  }

  public vCard: VCard = {
    name: {
      firstNames: this.businessName
    },
    telephone: [this.telephone],
    email: [this.email],
    workEmail: ["kirklandenterprisesunlimited@gmail.com"],
    role: "CEO of Luxy Nics",
    url: "https://savannahpicnic.com/",
    logo: "../../assets/images/logos/luxy_nics_logo.jpg",
  };

}
