import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/models/campaign/campaign';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {

  campaigns:Campaign[] = [{
    id:1,
    title:'75 TL Üzerine Teslimat Ücreti Bizden',
    campaignColor:'#FFEAE8',
    description:'Kampanya',
    buttonName:'Detaylı Bilgi',
    buttonUrl:'https://www.ciceksepeti.com',
    img:'../../assets/img/campaign-1/campaign-1.png'
  },
  {
    id:2,
    title:'Hediye Kategorisi İçin Sepette %15 İndirim',
    campaignColor:'#E8F1FF',
    description:'Kampanya',
    buttonName:'Hediye Ürünleri',
    buttonUrl:'https://www.ciceksepeti.com',
    img:'../../assets/img/campaign-2/campaign-2.png'
  },
  {
    id:3,
    title:'Kırtasiye Kategorisi için Sepette %15 İndirim',
    campaignColor:'#E2F7E1',
    description:'Kampanya',
    buttonName:'Detaylı Bilgi',
    buttonUrl:'https://www.ciceksepeti.com',
    img:'../../assets/img/campaign-3/campaign-3.png'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
