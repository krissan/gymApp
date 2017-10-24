import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController  } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  role: string;
  email: string;
  password: string;
  passwordAgain: string;
  doublePass: boolean;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  register(){
    this.allowLogin();

    if (this.doublePass == true)
    {
      this.showLoader();

      let details = {
        email: this.email,
        password: this.password,
        role: this.role
      };

    	this.authService.createAccount(details).then((result) => {
    		this.loading.dismiss();
    		console.log(result);
    		this.navCtrl.setRoot(HomePage);
    	}, (err) => {
        console.log(err);
    		this.loading.dismiss();
    	});
    }
    else
    {
      this.presentAlert();
    }
  }

  allowLogin(){
  	if (this.password.length > 6 && this.password == this.passwordAgain)
  	{
  		this.doublePass = true;
  	}
  	else
  	{
  		this.doublePass = false;
  	}
  }

  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
 
  }

  presentAlert() {
    const alert = this.alertCtrl.create({
      title: 'Incorrect signup inputs',
      subTitle: 'Please ensure valid email and passwords entered are the same.',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  launchSignup(){
  	this.navCtrl.push(SignupPage);
  }

  launchLogin(){
    this.navCtrl.pop();
  }
}
