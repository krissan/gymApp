import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  //User login parameters
  email: string;
  password: string;

  //loading object
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    //Pop up loading
    this.showLoader();

    //Check if already authenticated/logged in
    this.authService.checkAuthentication().then((res) => {
        //If already logged in redirect to homepage and dismiss loader
        console.log("Already authorized");
        this.loading.dismiss();
        this.navCtrl.setRoot(HomePage);
    }, (err) => {
        //Otherwise dismiss loader
        console.log("Not already authorized");
        this.loading.dismiss();
    });

  }

  //login user
  login(){
    //Pop-up loader
    this.showLoader();

    //User input for login
    let credentials = {
        email: this.email,
        password: this.password
    };
 
    //Pass login input
    this.authService.login(credentials).then((result) => {
        this.loading.dismiss();
        this.navCtrl.setRoot(HomePage);
    }, (err) => {
        //If login input was rejected, dismiss loading and display error
        this.loading.dismiss();
        console.log(JSON.stringify(err));
    });
  }

  //Launch sign up
  launchSignup(){
    this.navCtrl.push(SignupPage);
  }

  //Show loader
  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();
  }

}
