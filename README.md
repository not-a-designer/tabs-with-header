# IONIC SIDEMENU + TABS APPLICATION WITH PERSISTENT APP-HEADER TEMPLATE


### 1. run
    $ ionic start testheadertabs tabs --type=angular --cordova


### 2. Modifications
  - import `CUSTOM_ELEMENTS_SCHEMA` from `@angular/core` if not present and add it to the schemas array on the main NgModule and any other modules that load custom components
  - Created 'pages' and 'components' folders for sturctural clarity.
  - Moved auto-generated template page folders into 'pages' folder.
  - Create components module in 'components' folder: see [my components module](../master/src/app/components/components.module.ts)
  - app.component.ts:
    ```
    <ion-app>
      <ion-menu #mainMenu>
        <ion-header>
          <ion-toolbar>
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content padding>
          <ion-list>
            <ion-menu-toggle>
              <ion-item button>
                <ion-label>Menu Item</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>

      <ion-router-outlet main></ion-router-outlet>
    </ion-app>
    ```

### 3. Add page and component
  - ```$ ionic g page pages/settings```
  - ```$ ionic g component components/app-header```
  - in `components/app-header.comomponent.ts`, change the `@Component` selector from:
    `app-app-header` to `app-header`, Ionic defaults 'app-' prefix

### 4. Modify Tabs Page (imports not shown)
  - tabs.page.html:
    ```
    <ion-header>
      <app-header [title]="outletTitle" (headerAction)="handleHeaderActions($event)"></app-header>
    </ion-header>
    <ion-content>
      <ion-tabs (ionNavDidChange)="getOutlet()">
        <ion-tab>
          ...
        </ion-tab>
      </ion-tabs>
    </ion-content>
    ```
  - tabs.page.ts:
    ```
    handleHeaderActions(event) {
      if (event.name === 'settings') this.router.navigate(['/settings']);
    }
  
    getOutlet() {
      switch (this.router.url) {
        case this.tabsList[1].href: {
          this.outletTitle = this.tabsList[1].label;
          break;
        }
        case this.tabsList[2].href: {
          this.outletTitle = this.tabsList[2].label;
          break;
        }
        default: {
          this.outletTitle= this.tabsList[0].label;
          break;
        }
      }
    }
    ```
  
### 5. Modify Header Component (imports not shown)
  - app-header.component.html:
    ```
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-toggle>
          <ion-button icon-only>
            <ion-icon name="menu"></ion-icon>
          </ion-button>
        </ion-menu-toggle>
        <ion-icon name="search" *ngIf="title === 'Contact'"></ion-icon>
      </ion-buttons>

      <ion-title *ngIf="title != 'Contact'">{{ title | titlecase }}</ion-title>
      <ion-input *ngIf="title === 'Contact'" type="text" placeholder="Search contacts..."></ion-input>

      <ion-buttons slot="primary">

      </ion-buttons>

      <ion-buttons slot="end">
        <ion-button icon-only *ngIf="isAuthenticated" (click)="onSettingsClicked()">
          <ion-icon name="settings"></ion-icon>
        </ion-button>
        <ion-button icon-only (click)="isAuthenticated = !isAuthenticated">
          <ion-icon [name]="isAuthenticated ? 'log-out' : 'log-in'"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
    ```
  - app-header.component.ts:
    ```
    @Input('title') title: string;

    @Output('headerAction') 
    headerAction: EventEmitter<Action> = new EventEmitter<Action>();
    
    isAuthenticated: boolean = false;
    
    onSettingsClicked() {
      this.headerAction.emit({ name: 'settings' })
    }
    ```
### 6. Modify Settings Page (imports not shown)
  - settings.page.html:
    ```
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>

    </ion-content>
    ```
