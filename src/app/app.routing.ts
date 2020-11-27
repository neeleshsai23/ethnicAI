import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";
import { ShowroomComponent } from "./showroom/showroom.component";
import { TestComponent } from "./test/test.component";

export const routes: Routes = [
  
  { path: "login", component: LoginComponent,data:{breadcrumb:"Login"}},
  {
    path:"",
    component:ShowroomComponent,
    loadChildren:"./showroom/showroom.module#ShowroomModule"
  },
  {
    path:"eai",
    component:LayoutComponent,
    loadChildren:"./admin/admin.module#AdminModule"
  },
  {
    path:"vendor",
    component:LayoutComponent,
    loadChildren:'./vendor/vendor.module#VendorModule'
  },
  {
    path:"test",
    component:TestComponent,
    loadChildren:"./test/test.module#TestModule"
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    //  preloadingStrategy: PreloadAllModules, 
  // useHash: true
});
