import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: "Recipes",
      url: "/app/tabs/recipes",
      icon: "calendar",
    },
    // {
    //   title: "Speakers",
    //   url: "/app/tabs/speakers",
    //   icon: "people",
    // },
    // {
    //   title: "Map",
    //   url: "/app/tabs/map",
    //   icon: "map",
    // },
    {
      title: "My Profile",
      url: "/app/tabs/about",
      icon: "person",
    },
  ];
  loggedIn = false;
  dark = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async ngOnInit() {
    //this.checkLoginStatus();
    //this.listenForLoginEvents();
    // this.swUpdate.available.subscribe(async res => {
    //   const toast = await this.toastCtrl.create({
    //     message: 'Update available!',
    //     position: 'bottom',
    //     buttons: [
    //       {
    //         role: 'cancel',
    //         text: 'Reload'
    //       }
    //     ]
    //   });
    //  await toast.present();
    //   toast
    //     .onDidDismiss()
    //     .then(() => this.swUpdate.activateUpdate())
    //     .then(() => window.location.reload());
    // });
  }
}
