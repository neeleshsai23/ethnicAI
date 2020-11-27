import { Component, OnInit } from '@angular/core';

import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-analytics-summary',
  templateUrl: './analytics-summary.component.html',
  styleUrls: ['./analytics-summary.component.scss']
})
export class AnalyticsSummaryComponent implements OnInit {

  public single: any[];
  public singles: any[];
  public payments:any[];
  public state:any[];
  public multi: any[];
  public analytics: any[];
  public showLegend = true;
  public showLegends = false;
  public gradient = true;
  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = false;
  public xAxisLabel = 'Year';
  public showYAxisLabel = false;
  public yAxisLabel = 'Population';
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public autoScale = true;

  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings; 
    const single = [
      {
        name: 'US',
        value: 20
      },
      {
        name: 'UAE',
        value: 10
      },
      {
        name: 'UK',
        value: 15
      },
      {
        name: 'CANADA',
        value: 30
      },
      {
        name: 'AUSTRALIA',
        value: 2
      },
    ];
    const singles = [
      {
        name: 'SAREES',
        value: 20
      },
      {
        name: 'KURTIS',
        value: 33
      },
      {
        name: 'LEHENGAS',
        value: 21
      },
      {
        name: 'GOWNS',
        value: 18
      },
      {
        name: 'SALWAR KAMEEZ',
        value: 19
      }
    ];
    const payments = [
      {
        name: 'PREPAID',
        value: 20
      },
      {
        name: 'POSTPAID',
        value: 15
      }
    ];
    const state = [
      {
        name: 'SUCCESSFUL',
        value: 25
      },
      {
        name: 'CANCELLED',
        value: 10
      },
      {
        name: 'RETURNED',
        value: 15
      }
    ];
    const analytics = [
      {
        name:"Subscribed",series: [
          {
            name: 'January',
            value: 10
          },
          {
            name: 'February',
            value: 15
          },
          {
            name: 'March',
            value: 8
          },
          {
            name: 'April',
            value: 20
          },
          {
            name: 'May',
            value: 25
          },
          {
            name: 'June',
            value: 35
          },
          {
            name: 'July',
            value: 55
          },
          {
            name: 'August',
            value: 30
          },
          {
            name: 'September',
            value: 26
          },
          {
            name: 'October',
            value: 10
          },
          {
            name: 'November',
            value: 26
          },
          {
            name: 'December',
            value: 10
          }
        ]
      }
    ]
    Object.assign(this, {single,singles,payments,state,analytics}); 
  }
  
  public onSelect(event) {
    console.log(event);
  }
  conversations = [
    {lead_name:"Srinu",days:"Rs.3,00,000 -/-",color:false},
    {lead_name:"Raj",days:"Rs.2,95,000 -/-",color:false},
    {lead_name:"Navin",days:"Rs.2,90,000 -/-",color:true},
    {lead_name:"Shiva",days:"Rs.2,60,000 -/-",color:true},
    {lead_name:"Sai",days:"Rs.2,50,000 -/-",color:true},
   
  ]
  ngOnInit() {

  }
}
