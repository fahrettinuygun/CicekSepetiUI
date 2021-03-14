import { Component, Input, OnInit } from '@angular/core';
import { Campaign } from 'src/app/models/campaign/campaign';

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.scss']
})
export class CampaignCardComponent implements OnInit {

  @Input()
  campaign:Campaign
  constructor() { }

  ngOnInit(): void {
  }

  goToCampaign(){
    window.location.href = this.campaign.buttonUrl;
  }
}
