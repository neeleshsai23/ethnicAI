import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";
import { ShowroomComponent } from "./showroom/showroom.component";

export const routes: Routes = [
  
  { path: "login", component: LoginComponent,data:{breadcrumb:"Login"}},
  {path:"",component:ShowroomComponent,data:{breadcrumb:"Showroom"}},
  {
    path:"eai",
    component:LayoutComponent,
    loadChildren:"./admin/admin.module#AdminModule"
  },
  {
    path:"vendor",
    component:LayoutComponent,
    loadChildren:'./vendor/vendor.module#VendorModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    //  preloadingStrategy: PreloadAllModules, 
  // useHash: true
});
