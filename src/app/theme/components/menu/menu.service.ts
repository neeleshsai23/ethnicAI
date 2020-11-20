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
        new Menu (1, 'Radar', '/eai/radar', null, 'analytics', null, false, 0,"white",true), 
        new Menu (2, 'Customers', '/eai/customers', null, 'groups', null, false, 0,"white",true), 
        new Menu (3, 'Vendors', '/eai/vendors', null, 'business_center', null, false, 0,"white",true), 
        new Menu (4, 'Orders', '/eai/orders', null, 'dns', null, false, 0,"white",true), 
        new Menu (5, 'Logistics', '/eai/logistics', null, 'local_shipping', null, false, 0,"white",true), 
        new Menu (6, 'Finance', '/eai/finance', null, 'account_balance', null, false, 0,"white",true), 
        new Menu (7, 'Admin', '/eai/admin', null, 'admin_panel_settings', null, true, 0,"white",true),   
        new Menu (8, 'Master Data', '/eai/admin/masterdata', null, 'reorder', null, false, 7,"white",true),  
        new Menu (9, 'Users', '/eai/admin/users', null, 'people', null, false, 7,"white",true), 
        new Menu (10, 'Settings', '/eai/admin/settings', null, 'settings', null, false, 7,"white",true), 
        new Menu (11, 'Lookup Options', '/eai/admin/lookup', null, 'search', null, false, 7,"white",true),
        );
      } else if (this.userType == 'vendor') {
        temp.push(
          new Menu (1, 'Store', '/vendor/store', null, 'store', null, false, 0,"white",true),
          new Menu (2, 'Dashboard', '/vendor/dashboard', null, 'dashboard', null, false, 0,"white",true),
          new Menu (3, 'Products', '/vendor/products', null, 'view_module', null, true, 0,"white",true),
          new Menu (4, 'Collections', '/vendor/products/collections', null, 'collections', null, false, 3,"white",true),
          new Menu (5, 'Inventory', '/vendor/products/inventory', null, 'business_center', null, false, 3,"white",true), 
          new Menu (6, 'Orders', '/vendor/orders', null, 'dns', null, false, 0,"white",true),
          new Menu (7, 'Logistics', '/vendor/logistics', null, 'local_shipping', null, false, 0,"white",true), 
          new Menu (8, 'Customers', '/vendor/customers', null, 'groups', null, false, 0,"white",true), 
          new Menu (9, 'Finance', '/vendor/finance', null, 'account_balance', null, true, 0,"white",true),
          new Menu (10, 'Receivables', '/vendor/finance/receivables', null, 'request_quote', null, false, 9,"white",true),
          new Menu (11, 'Revenue', '/vendor/finance/revenue', null, 'attach_money', null, false, 9,"white",true),
          new Menu (12, 'Tax', '/vendor/finance/tax', null, 'money_off', null, false, 9,"white",true), 
          new Menu (13, 'My Account', '/vendor/user', null, 'admin_panel_settings', null, true, 0,"white",true),   
          new Menu (14, 'Users', '/vendor/user/users', null, 'people', null, false, 13,"white",true), 
          new Menu (15, 'Settings', '/vendor/user/settings', null, 'settings', null, false, 13,"white",true), 
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
      