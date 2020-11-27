import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

import { Menu } from "./menu.model";
import { verticalMenuItems, horizontalMenuItems, adminMenuItems } from "./menu";

@Injectable()
export class MenuService {
  
  verticalMenuItems: any;
  horizontalMenuItems: any;
  userType: any;
  
  constructor(private location: Location, private router: Router) {
    this.userType = localStorage.getItem('userType');
    let temp = [];
    if (this.userType == 'admin') {
      temp.push(
        new Menu (1, 'Dashboard', '/eai/dashboard', null, 'dashboard', null, false, 0,"white",true), 
        new Menu (2, 'Vendors', '/eai/vendors', null, 'groups', null, false, 0,"white",true), 
        new Menu (3, 'Categories', '/eai/categories', null, 'category', null, false, 0,"white",true), 
        new Menu (4, 'Inventory', '/eai/inventory', null, 'dns', null, false, 0,"white",true), 
        new Menu (5, 'Catalog', '/eai/catalog', null, 'view_module', null, false, 0,"white",true), 
        new Menu (6, 'Orders', '/eai/orders', null, 'reorder', null, false, 0,"white",true), 
        new Menu (7, 'Payouts', '/eai/payouts', null, 'account_balance', null, false, 0,"white",true), 
        new Menu (8, 'Reports', '/eai/reports', null, 'layers', null, false, 0,"white",true), 
        new Menu (9, 'Admin', '/eai/admin', null, 'admin_panel_settings', null, true, 0,"white",true),
        new Menu (10, 'Master Data', '/eai/admin/master-data', null, 'group_add', null, false, 9,"white",true),
        new Menu (10, 'Staff users', '/eai/admin/staff-users', null, 'contact_page', null, false, 9,"white",true),
        new Menu (10, 'Manage Tickets','/eai/admin/manage-tickets', null, 'zoom_in', null, false, 9,"white",true),
        new Menu (10, 'Theme Design', '/eai/admin/theme-design', null, 'design_services', null, false, 9,"white",true),
        new Menu (10, 'Manage FAQ', '/eai/admin/manage-faq', null, 'web_asset', null, false, 9,"white",true),
        new Menu (10, 'Home Layout','/eai/admin/home-layout', null, 'view_compact', null, false, 9,"white",true),
        new Menu (10, 'CMS Pages', '/eai/admin/cms-pages', null, 'payments', null, false, 9,"white",true),
        new Menu (10, 'Home Banner', '/eai/admin/home-banner', null, 'view_carousel', null, false, 9,"white",true),
        new Menu (10, 'Settings', '/eai/admin/settings', null, 'settings', null, false, 9,"white",true),   
      
        );
      } else if (this.userType == 'vendor') {
        temp.push(
          // new Menu (1, 'Radar', '/vendor/radar', null, 'analytics', null, false, 0,"white",true), 
          // new Menu (2, 'Store', '/vendor/store', null, 'store', null, false, 0,"white",true),
          new Menu (3, 'Dashboard', '/vendor/dashboard', null, 'dashboard', null, false, 0,"white",true),
          new Menu (4, 'Products', '/vendor/products', null, 'view_module', null, true, 0,"white",true),
          // new Menu (5, 'Products', '/vendor/catalog/products', null, 'business_center', null, false, 4,"white",true),
          // new Menu (6, 'Inventory', '/vendor/catalog/inventory', null, 'dns', null, false, 4,"white",true), 
          new Menu (7, 'Orders', '/vendor/orders', null, 'reorder', null, false, 0,"white",true),
          new Menu (8, 'Deals', '/vendor/deals', null, 'local_offer', null, false, 0,"white",true),
          new Menu (9, 'customers', '/vendor/customers', null, 'groups', null, false, 0,"white",true),
          // new Menu (10, 'Inventory', '/vendor/inventory', null, 'dns', null, false, 0,"white",true),

         
          new Menu (11, 'Logistics', '/vendor/logistics', null, 'local_shipping', null, false, 0,"white",true), 
          new Menu (12, 'Reviews', '/vendor/reviews', null, 'rate_review', null, false, 0,"white",true), 
          // new Menu (13, 'Profile', '/vendor/profile', null, 'account_box', null, false, 0,"white",true), 

          // new Menu (9, 'Customers', '/vendor/customers', null, 'groups', null, false, 0,"white",true), 
          // new Menu (10, 'Finance', '/vendor/finance', null, 'account_balance', null, true, 0,"white",true),
          // new Menu (11, 'Receivables', '/vendor/finance/receivables', null, 'request_quote', null, false, 10,"white",true),
          // new Menu (12, 'Revenue', '/vendor/finance/revenue', null, 'attach_money', null, false, 10,"white",true),
          // new Menu (13, 'Tax', '/vendor/finance/tax', null, 'money_off', null, false, 10,"white",true), 
          new Menu (14, 'My Account', '/vendor/user', null, 'admin_panel_settings', null, true, 0,"white",true),   
          new Menu (15, 'Staff Users', '/vendor/user/users', null, 'contact_page', null, false, 14,"white",true), 
          new Menu (16, 'Support Tickets', '/vendor/user/support', null, 'support', null, false, 14,"white",true), 
          new Menu (17, 'Master Data', '/vendor/user/masterdata', null, 'group_add', null, false, 14,"white",true), 

          new Menu (18, 'Settings', '/vendor/user/settings', null, 'settings', null, false, 14,"white",true), 
          new Menu (19, 'Lookup Options', '/vendor/user/lookup', null, 'zoom_in', null, false, 14,"white",true), 

          );
        }
        
        this.verticalMenuItems = temp;
        this.horizontalMenuItems = temp;
      }
      
      public getVerticalMenuItems(): Array<Menu> {
        return this.verticalMenuItems;
      }
      
      public getHorizontalMenuItems(): Array<Menu> {
        return this.horizontalMenuItems;
      }
      
      public getAdminMenuItems(): Array<Menu> {
        return adminMenuItems;
      }
      
      public expandActiveSubMenu(menu: Array<Menu>) {
        let url = this.location.path();
        let routerLink = url; // url.substring(1, url.length);
        let activeMenuItem = menu.filter((item) => item.routerLink === routerLink);
        if (activeMenuItem[0]) {
          let menuItem = activeMenuItem[0];
          while (menuItem.parentId != 0) {
            let parentMenuItem = menu.filter(
              (item) => item.id == menuItem.parentId
              )[0];
              menuItem = parentMenuItem;
              this.toggleMenuItem(menuItem.id);
            }
          }
        }
        
        public toggleMenuItem(menuId) {
          let menuItem = document.getElementById("menu-item-" + menuId);
          let subMenu = document.getElementById("sub-menu-" + menuId);
          if (subMenu) {
            if (subMenu.classList.contains("show")) {
              subMenu.classList.remove("show");
              menuItem.classList.remove("expanded");
            } else {
              subMenu.classList.add("show");
              menuItem.classList.add("expanded");
            }
          }
        }
        
        public closeOtherSubMenus(menu: Array<Menu>, menuId) {
          let currentMenuItem = menu.filter((item) => item.id == menuId)[0];
          if (currentMenuItem.parentId == 0 && !currentMenuItem.target) {
            menu.forEach((item) => {
              if (item.id != menuId) {
                let subMenu = document.getElementById("sub-menu-" + item.id);
                let menuItem = document.getElementById("menu-item-" + item.id);
                if (subMenu) {
                  if (subMenu.classList.contains("show")) {
                    subMenu.classList.remove("show");
                    menuItem.classList.remove("expanded");
                  }
                }
              }
            });
          }
        }
      }
      