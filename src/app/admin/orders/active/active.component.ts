import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {

  items=[
    {"project_code":"2478BA","project_name":"MRC ","client":"Robert ","consultant":"FastTrack ","BOQ_Items":"120/173","la":" 244","la_date":"12/02/2020 ",          "agreement":"343",    "agreement_date":"13/03/2020","start_date":"14/04/2020","target_date":"16/06/2020 ","total_cost":"70000","billed":"70000","paid":"35000 ","margin":"30000 ","Status":"Completed ","Completion":"90%" },                                                           
    {"project_code":"3478BA","project_name":"MPK ","client":"John ","consultant":"Design ","BOQ_Items":"350/456","la":" 245","la_date":" 3/02/2020",                "agreement":" 323",   "agreement_date":"14/03/2020","start_date":"15/04/2020","target_date":"17/06/2020 ","total_cost":"71000","billed":"70000","paid":"35000 ","margin":"31000 ","Status":" Completed","Completion":"20%" },  
    {"project_code":"4478BA","project_name":"Becon","client":"Singh ","consultant":" Stone Factory","BOQ_Items":"220/150","la":"246 ","la_date":"13/02/2020 ",      "agreement":"265",    "agreement_date":"15/03/2020","start_date":"16/04/2020","target_date":"18/06/2020 ","total_cost":"72000","billed":"70000","paid":"35000 ","margin":"32000 ","Status":"Completed " ,"Completion":"30%"},  
    {"project_code":"5478BA","project_name":" IBW","client":" Anna","consultant":"Instant ","BOQ_Items":"198/120","la":"247 ","la_date":" 14/02/2020",              "agreement":"376 ",   "agreement_date":"16/03/2020","start_date":"17/04/2020","target_date":"19/06/2020 ","total_cost":"73000","billed":"71000","paid":"35000 ","margin":"33000 ","Status":"Process " ,"Completion":"40%"},  
    {"project_code":"6478BA","project_name":"Sales Global ","client":"Mike ","consultant":"IBW ","BOQ_Items":"128/198","la":"248 ","la_date":"15/02/2020 ",         "agreement":"312 ",   "agreement_date":"17/03/2020","start_date":"18/04/2020","target_date":"11/06/2020 ","total_cost":"74000","billed":"72000","paid":"35000 ","margin":"34000 ","Status":"Process " ,"Completion":"90%"},  
    {"project_code":"7478BA","project_name":"Instant ","client":"Jonny ","consultant":"Sales Global ","BOQ_Items":"127/127","la":"249 ","la_date":"16/02/2020 ",    "agreement":"367 ",   "agreement_date":"18/03/2020","start_date":"19/04/2020","target_date":"6/06/2020 ","total_cost":"75000","billed":"73000","paid":"35000 ","margin":"35000 ","Status":"Pending " ,"Completion":"20%"},  
    {"project_code":"8478BA","project_name":"Stone factory ","client":" Randy","consultant":"becon","BOQ_Items":"128/129","la":"250 ","la_date":"17/02/2020 ",      "agreement":"276",    "agreement_date":"19/03/2020","start_date":"4/04/2020","target_date":"7/06/2020 ","total_cost":"76000","billed":",74000","paid":"35000 ","margin":"36000 ","Status":"Process " ,"Completion":"10%"},  
    {"project_code":"9478BA","project_name":"Design ","client":" Rock","consultant":" MPK","BOQ_Items":"127/289","la":"261 ","la_date":" 18/02/2020",               "agreement":"288",   "agreement_date":"1/03/2020","start_date":"3/04/2020","target_date":"8/06/2020 ","total_cost":"77000","billed":"75000","paid":"35000 ","margin":"37000 ","Status":"Completed ","Completion":"55%" },  
    {"project_code":"1478BA","project_name":" FastTrack","client":"Jack ","consultant":"MRC","BOQ_Items":"281/128","la":"233 ","la_date":"19/02/2020 ",             "agreement":"289",    "agreement_date":"2/03/2020","start_date":"5/04/2020","target_date":"10/06/2020 ","total_cost":"78000","billed":"76000","paid":"35000 ","margin":"38000 ","Status":"Completed ","Completion":"35%" },  
  ]
  constructor() { }

  ngOnInit() {
  }

}
