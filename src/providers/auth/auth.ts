import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public token: any;  //Auth Token
  public userid: any; //Users id

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello AuthProvider Provider');
  }

  //Check if user is authenticated, by passing localstorages token to server
  checkAuthentication(){
  	return new Promise((resolve, reject) => {
        //Load token if exists
        this.storage.get('token').then((value) => {
            this.token = value;
            let headers = new Headers();
            headers.append('Authorization', this.token);
 
            this.http.get('https://krissan-gym-app.herokuapp.com/api/auth/protected', {headers: headers})
                .subscribe(res => {
                    this.checkUserId();
                    resolve(res);
                    console.log("success");
                }, (err) => {
                    console.log("rejected");
                    reject(err);
                });
        });        
 
    });
  }

  //Check if userid is equal to userid in local storage
  checkUserId(){
    //Load token if exists
    this.storage.get('userid').then((value) => {
        this.userid = value;
    });
  }

  //Create account by sending details passed in to server and from response get token, storing it and userid in local storage
  createAccount(details){
 
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('https://krissan-gym-app.herokuapp.com/api/auth/register', JSON.stringify(details), {headers: headers})
        .subscribe(res => {
          console.log(res);
          let data = res.json();
          this.token = data.token;
          this.userid = data.user._id;
          this.storage.set('token', data.token);
          this.storage.set('userid', data.user._id);
          this.storage.set('useremail', data.user.email);
          resolve(data); 
        }, (err) => {
          reject(err);
        });
    });
 
  }
 
  //Login user by credentials passed in and from response get token, storing it and userid in local storage
  login(credentials){
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post('https://krissan-gym-app.herokuapp.com/api/auth/login', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
 
            let data = res.json();
            this.token = data.token;
            this.userid = data.user._id;
            this.storage.set('token', data.token);
            this.storage.set('userid', data.user._id);
                      console.log(data.user);

            this.storage.set('useremail', data.user.email);
            resolve(data);
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
 
  }
 
  //Logout user by clearing token and userid from storage
  logout(){
    this.storage.set('token', '');
    this.storage.set('userid', '');
    this.storage.set('useremail', '');
  }
}
