import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthProvider } from '../auth/auth';
import 'rxjs/add/operator/map';

/*
  Generated class for the RoutinesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoutinesProvider {

  constructor(public http: Http, public authService: AuthProvider) {
 
  }

  //Retrieve users routines by userid from server by passing auth token in header
  getRoutines()
  {
  	return new Promise((resolve, reject) => {
  		let headers = new Headers();
  		headers.append('Authorization', this.authService.token);

		  this.http.get('https://krissan-gym-app.herokuapp.com/api/routines/' + this.authService.userid, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });		
  	});
  }

  //Create routine in database, by passing routine and authorization header to server
  createRoutine(routine){
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.authService.token);
      
      this.http.post('https://krissan-gym-app.herokuapp.com/api/routines', JSON.stringify(routine), {headers: headers})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  //Delete routine in database, by passing  authorization header to server and routine id in url
  deleteRoutine(id){
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Authorization', this.authService.token);
 
        this.http.delete('https://krissan-gym-app.herokuapp.com/api/routines/' + id, {headers: headers}).subscribe((res) => {
            resolve(res);
        }, (err) => {
            reject(err);
        });   
 
    });
  }

  //Edit routine in database, by passing updated routine and authorization header to server with routines id in url
  editRoutine(routine){
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.authService.token);
      
      console.log(routine.rid);
      this.http.post('https://krissan-gym-app.herokuapp.com/api/routines/' + routine.rid, JSON.stringify(routine), {headers: headers})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
