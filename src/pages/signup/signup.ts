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

  //User sign-up parameters
  role: string;
  email: string;
  password: string;
  passwordAgain: string;
  doublePass: boolean;

  //loading object
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  //register user
  register(){
    //Check if login is allowed
    this.allowLogin();

    //If login is allowed
    if (this.doublePass == true)
    {
      //Pop up loading
      this.showLoader();

      //Users Parameters
      let details = {
        email: this.email,
        password: this.password,
        role: this.role
      };

      //Create account by passing user parameters to server
      this.authService.createAccount(details).then((result) => {
        //If account is created re-route to home page
        this.loading.dismiss();
        console.log(result);
        this.navCtrl.setRoot(HomePage);
      }, (err) => {
        //If account creation is unsuccessfull present error
        console.log(err);
        this.loading.dismiss();
      });
    }
    //If login is not allowed present alert
    else
    {
      this.presentAlert();
    }
  }

  //Check if login is allowed
  allowLogin(){
    //If password length is greater than 6 and both password fields are equal
    if (this.password.length > 6 && this.password == this.passwordAgain)
    {
      this.doublePass = true;
    }
    else
    {
      this.doublePass = false;
    }
  }

  //Show loader
  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
  }

  //Present alert prompting user for proper input
  presentAlert() {
    const alert = this.alertCtrl.create({
      title: 'Incorrect signup inputs',
      subTitle: 'Please ensure valid email and passwords entered are the same.',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  //Launch signup page
  launchSignup(){
    this.navCtrl.push(SignupPage);
  }

  //Launch login page by popping page
  launchLogin(){
    this.navCtrl.pop();
  }
}
