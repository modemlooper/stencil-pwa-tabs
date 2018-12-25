import { Component, Prop } from "@stencil/core";

@Component({
  tag: "page-tabs",
  styleUrl: "page-tabs.css"
})
export class PageTabs {
  @Prop({ connect: "ion-menu-controller" })
  menuCtrl: HTMLIonMenuControllerElement;

  async componentDidLoad() {
    const menuCtlr: HTMLIonMenuControllerElement = await (this
      .menuCtrl as any).componentOnReady();
    menuCtlr.enable(true);
  }

  render() {
    return [
      <ion-tabs>
        <ion-tab tab="tab-home">
          <ion-nav />
        </ion-tab>

        <ion-tab tab="tab-settings">
          <ion-nav />
        </ion-tab>

        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab-home">
            <ion-icon name="home" />
            <ion-label>Home</ion-label>
            <ion-badge />
          </ion-tab-button>

          <ion-tab-button tab="tab-settings">
            <ion-icon name="cog" />
            <ion-label>Settings</ion-label>
            <ion-badge />
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    ];
  }
}
