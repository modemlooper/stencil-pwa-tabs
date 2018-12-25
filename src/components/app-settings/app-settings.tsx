import { Component } from '@stencil/core';


@Component({
    tag: 'app-settings',
    styleUrl: 'app-settings.css'
})
export class AppSettings {

    

    render() {
        return [
            <ion-header>
              <ion-toolbar color="primary">
                <ion-title>Settings</ion-title>
              </ion-toolbar>
            </ion-header>,
      
            <ion-content padding>
      
            </ion-content>
          ];
    }
}
