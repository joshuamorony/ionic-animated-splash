import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Splash } from '../pages/splash/splash';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

	rootPage:any = HomePage;

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {

		platform.ready().then(() => {

			statusBar.styleDefault();

			let splash = modalCtrl.create(Splash);
			splash.present();

		});

	}

}

