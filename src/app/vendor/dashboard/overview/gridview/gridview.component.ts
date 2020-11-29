import { Component, OnInit } from '@angular/core';

import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.scss']
})
export class GridviewComponent implements OnInit {

  public single: any[];
  public singles: any[];
  public double: any[];
  public doubles: any[];
  public multi: any[];
  public analytics: any[];
  public analytics1: any[];
  public analytics2: any[];
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
        name: 'UK',
        value: 10
      },
      {
        name: 'UAE',
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
        name: 'US',
        value: 200
      },
      {
        name: 'UK',
        value: 250
      },
      {
        name: 'UAE',
        value: 210
      },
      {
        name: 'CANADA',
        value: 180
      },
      {
        name: 'AUSTRALIA',
        value: 190
      }
    ];
    const double = [
      {
        name: 'KURTIS',
        value: 40
      },
      {
        name: 'SAREES',
        value: 33
      },
      {
        name: 'SAREE BLOUSE',
        value: 11
      },
      {
        name: 'KURTAS',
        value: 18
      },
      {
        name: 'LEHENGAS',
        value: 19
      }
    ];
    const doubles = [
      {
        name: 'US',
        value: 26
      },
      {
        name: 'UK',
        value: 14
      },
      {
        name: 'UAE',
        value: 19
      },
      {
        name: 'CANADA',
        value: 34
      },
      {
        name: 'AUSTRALIA',
        value: 8
      },
    ];
    const analytics = [
      {
        name:"Orders",series: [
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
    ];
    const analytics1 = [
      {
        name:"Orders",series: [
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
    ];
    const analytics2 = [
      {
        name:"Value",series: [
          {
            name: 'January',
            value: 100
          },
          {
            name: 'February',
            value: 150
          },
          {
            name: 'March',
            value: 40
          },
          {
            name: 'April',
            value: 60
          },
          {
            name: 'May',
            value: 55
          },
          {
            name: 'June',
            value: 25
          },
          {
            name: 'July',
            value: 95
          },
          {
            name: 'August',
            value: 20
          },
          {
            name: 'September',
            value: 86
          },
          {
            name: 'October',
            value: 50
          },
          {
            name: 'November',
            value: 76
          },
          {
            name: 'December',
            value: 80
          }
        ]
      }
    ];
        
    Object.assign(this, {single,singles,double,doubles,analytics,analytics1,analytics2}); 
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