import {
    Component
} from '@angular/core';
import {
    ActivatedRoute,
    Router,
    ActivatedRouteSnapshot,
    UrlSegment,
    NavigationEnd
} from "@angular/router";
import {
    Title
} from '@angular/platform-browser';
import {
    AppSettings
} from '../../../app.settings';
import {
    Settings
} from '../../../app.settings.model';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

    public pageTitle: string;
    public moduleTitle: string;
    public subTitle: string = "test";
    public test = "sample";
    public description: {};
    public breadcrumbs: {
        name: string;
        url: string
    } [] = [];
    public url:string = "none";

    public settings: Settings;
    constructor(public appSettings: AppSettings,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public title: Title) {
        this.settings = this.appSettings.settings;
        this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
              this.url=e.url.toString();
              console.log('bc',this.url);
            }
          });
        this.description = {

            "Analytics": "View analytics in the form of graphs and charts to get an overview of any project",

            // "Dashboard": "View analytics in the form of graphs and charts to get an overview of any project",

            "Manage": "This is Manage Screen",
            
            "Grid View": "This is Grid View Screen",
            "Map View": "This is Map View Screen",
            "Contacts": "This is Contacts Screen",


            "Projects": "Add projects, view project dashboards and project metrics from this screen ",
            "Project Dashboard": "A complete overview of any particular project is viewable from this screen ",
            "Scheduling":"This is Scheduling Screen",
            "Activity": "The timeline of the Project updates appears here.",
            
            "Payroll":"This is Payroll Screen",

            "Audit":"This is Audit Screen",
            "Overview":"This is Overview Screen",
            "Checklist":"This is Checklist Screen",

            "Procurement":"This is Procurement Screen",
            "Purchase Orders":"This is Procurement Screen",
            "Quotation Review":"This is Quotation Review Screen",
            "Quotations":"This is Quotations Screen",
            "Requisition":"This is Requisition Screen",
            "Work Orders":"This is Work Orders Screen",

           
            "Consignment":"This is Consignment Screen",
            "Gate Passes":"This is Gate Passes Screen",
            "GRN":"This is GRN Screen",
            "Item Type":"This is Item Master Screen",
            "Material Issues":"This is Material Issues Screen",
            "Stock Transfer":"This is Stock Transfer Screen",
            "Stock Disposal":"This is Stock Disposal Screen",
            "Vendor master":"This is Vendor master Screen",


            "Assets":"This is Assets Screen",
            "Assets Master":"This is Assets Master Screen",
            "Assets Maintenance":"This is Assets Maintenance Screen",
            "Assets Transfer":"This is Assets Transfer Screen",

            "Finance":"This is Finance Screen",
            "Billing":"This is Billing Screen",
            "Budgeting":"This is Budgeting Screen",
            "Expenses":"This is Expenses Screen",
            "Payables":"This is Payables Screen",

            "Admin":"This is Admin Screen",
            "Roles":"This is Roles Screen",
            "Users":"Add users and manage permissions from this screen",
            "Master Data":"Manage the various parts of the application by adding categories and subcategories from this screen",
            "Kanban":"This is Kanban Screen",
            "Color Codes":"This is Color Codes Screen",
            "Settings":"This is Settings Screen",
            "Lookup Options":"This is Admin Screen",
            "Announcements":"This is Announcements Screen",
            "Message Center" : "All messages can be viewed here",
            "Screen":"This is a Screen",
            "Branch" : "This screen is used to manage the branches",
            "Quotation" : "This screen is used to manage the quotations",
            "Material Issue Details" : "Spare parts/Material issued will be captured here",
            "Item Make" : "This is a Item Make Screen",
            "Item Model": "This is a Item Model Screen",

            "Devices": "Add and Manage IoT devices and read real time data pushed by the sensors in the IoT device",
            "Data Field":"This is DataField Screen",

            "Clients":"Add , view and manage your client directory on this screen",

            "Login":"This is login screen",
            "Showroom" : "This is Showroom Screen",
            "Logistics": "This is Logistics Screen",
            "Radar": "This is Radar Screen",
            "Vendors": "This is Vendors Screen",
            "Orders": "This screen is used to manage the orders",
            "Customers": "This is Customers Screen",
            "Dashboard": "This is Dashboard Screen",
            "Collections": "This is Collections Screen",
            "Store": "This is Stores Screen",
            "Categories":"This screen is used to manage the categories",

            "Inventory":"This screen is used to manage the inventory",

            "Catalog":"This screen is used to manage the catalog",
            "Payouts":"This screen is used to manage the payouts",
            "Reports":"This screen is used to manage the reports",
            "Reviews":"This is Reviews Screen",
            "Bundles":"This is Bundles Screen",
            "Deals":"This is Deals Screen",
            "Profile":"This is Profile Screen",

            "Shopping Cart": "Shopping Cart",
            "eAnythingIndian - Online Ethnic Clothing Store":"eAnythingIndian - Online Ethnic Clothing Store",
            "Wishlist" : "Wishlist",
            "My Account": "My Account",
            "My Orders": "My Orders",
            "Product Landing Page": "Product Landing Page"

        };
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.breadcrumbs = [];
                this.parseRoute(this.router.routerState.snapshot.root);
                this.pageTitle = "";
                this.breadcrumbs.forEach(breadcrumb => {
                    this.pageTitle = breadcrumb.name;
                })
                this.pageTitle ? null : this.pageTitle = " | Dashboard";

                var temp = this.pageTitle.split(' | ');
                if (temp.length > 4) {
                    this.subTitle = temp.pop();
                    this.moduleTitle = temp[temp.length - 1];
                } else if (temp.length > 3) {
                    this.subTitle = temp.pop();
                    this.moduleTitle = temp[temp.length - 1];
                } else {
                    this.moduleTitle = temp.pop();
                }

                if (this.subTitle === 'Permissions') {
                    this.moduleTitle = "Permissions";
                    this.subTitle = "test";
                }
                this.title.setTitle( this.pageTitle);
            }
        })
    }

    private parseRoute(node: ActivatedRouteSnapshot) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                let urlSegments: UrlSegment[] = [];
                node.pathFromRoot.forEach(routerState => {
                    urlSegments = urlSegments.concat(routerState.url);
                });
                let url = urlSegments.map(urlSegment => {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                })
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }

    public closeSubMenus() {
        let menu = document.querySelector(".sidenav-menu-outer");
        if (menu) {
            for (let i = 0; i < menu.children[0].children.length; i++) {
                let child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    }
}