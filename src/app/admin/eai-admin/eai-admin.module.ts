import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EaiAdminComponent } from './eai-admin.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { StaffUsersComponent } from './staff-users/staff-users.component';
import { ManageTicketsComponent } from './manage-tickets/manage-tickets.component';
import { ThemeDesignComponent } from './theme-design/theme-design.component';
import { ManageFaqComponent } from './manage-faq/manage-faq.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { CmsPagesComponent } from './cms-pages/cms-pages.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

export const routes = [
  { path: "",redirectTo:'master-data',data:{breadcrumb:"Dashboard"},pathMatch: 'full'},
  { path: "master-data", component:MasterDataComponent ,data:{breadcrumb:"Dashboard"}},
  { path: "staff-users", component:StaffUsersComponent ,data:{breadcrumb:"Dashboard"}},
  { path: "manage-tickets", component:ManageTicketsComponent ,data:{breadcrumb:"Dashboard"}},
  { path: "theme-design", component:ThemeDesignComponent ,data:{breadcrumb:"Dashboard"}},
  { path: "manage-faq", component: ManageFaqComponent ,data:{breadcrumb:"Dashboard"}},
  { path: "home-layout", component: HomeLayoutComponent ,data:{breadcrumb:"Dashboard"}},
  { path: "cms-pages", component: CmsPagesComponent,data:{breadcrumb:"Dashboard"}},
  { path: "home-banner", component:HomeBannerComponent ,data:{breadcrumb:"Dashboard"}},
  { path: "settings", component:SettingsComponent ,data:{breadcrumb:"Dashboard"}},

]

@NgModule({
  declarations: [EaiAdminComponent, MasterDataComponent, StaffUsersComponent, ManageTicketsComponent, ThemeDesignComponent, ManageFaqComponent, HomeLayoutComponent, CmsPagesComponent, HomeBannerComponent, SettingsComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    ChartsModule
  ]
})
export class EaiAdminModule { }
