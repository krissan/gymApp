import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { RoutinesProvider } from '../../providers/routines/routines';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { RoutinePage} from '../routine/routine';
import { RoutineModel } from '../../app/models/routine-model';
import { SubRoutine } from '../../app/models/routine-model';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  //List of users routines
  routines: RoutineModel[]
  //useremail
  useremail: any;
  //Loading object
  loading: any;

  constructor(public navCtrl: NavController, public routineService: RoutinesProvider, public modalCtrl: ModalController,
   public authService: AuthProvider, public loadingCtrl: LoadingController, public storage: Storage) {
   //instantiate routines
   this.routines = [];
  }

  ionViewDidLoad(){
    //Retrieve users routines from server
    this.reloadRoutines();
    //retrieve user email
    this.storage.get('useremail').then((value) => {
      this.useremail = value;
    }); 
  }

  //Add routine
  addRoutine(){
    //Pop-up routine modal
    let routineModal = this.modalCtrl.create(RoutinePage);
     routineModal.onDidDismiss(data => {
      //If data is returned
       if (data)
       {
        //Show loader
         this.showLoader();       

        //Create routine by sending returned data to server
         this.routineService.createRoutine({routineName: data.routineName, subroutines: data.subroutines, userid: this.authService.userid}).then((result) => {
          //If routine successfully stored in database, reload routines
           this.loading.dismiss();
          this.reloadRoutines();

         }, (err) => {
          //If error dismiss loading and print error
           this.loading.dismiss();
           console.log("not allowed" + err);
         });
       }
     });
    routineModal.present();
  }

  deleteRoutine(routine){
    //Pop-up loader
    this.showLoader();

    //Remove routine from database
    this.routineService.deleteRoutine(routine.rid).then((result) => {
 
      this.loading.dismiss();
 
      //Remove locally
        let index = this.routines.indexOf(routine);
        if(index > -1){
            this.routines.splice(index, 1);
        }
    }, (err) => {
      //If delete is unsuccessful do it
      this.loading.dismiss();
      console.log("not allowed");
    });
  }

  //Edit routine
  editRoutine(routine){
    //Launch routine modal with data to be edited
    let routineModal = this.modalCtrl.create(RoutinePage, {routine: routine, edit: true});
    routineModal.onDidDismiss(data => {
      //If data is returned
      if (data)
      {
        //Display Loader
        this.showLoader();       
        //Pass edited routine to be updated in server
        this.routineService.editRoutine({routineName: data.routineName, subroutines: data.subroutines, rid: routine.rid, userid: this.authService.userid}).then((result) => {
          //If successfully edited dismiss routine and reload routines
          this.loading.dismiss();
          this.reloadRoutines();
        }, (err) => {
          //If edit unsuccessful dismiss loading and display error
          this.loading.dismiss();
          console.log("not allowed" + err);
        });
      }
    });

    routineModal.present();
  }

  //Reload all users routines
  reloadRoutines()
  {
    //Retrieve all useres routines from server
    this.routineService.getRoutines().then((data) => {
      //Empty pages routines for re-population
      this.routines = [];

      //Loop through retrieved data and add them to routines array
      let i = 0;
      for (let rout in data)
      {
        let rN = data[i].routine;
        let rid = data[i]._id;

        let j = 0;
        let sets = [];
        for(let set in data[i].sets)
        {
          let set = new SubRoutine(data[i].sets[j].setExercise, data[i].sets[j].repAmount, data[i].sets[j].setTime);
          sets.push(set);
          j += 1;
        }
        
        let routine = new RoutineModel(rN, sets, rid);
        this.routines.push(routine);
        i += 1;
      }
    }, (err) => {
      //If routines can't be retrieved display error
      console.log("not allowed" + err);
    });
  }
  
  //Show loader
  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
    this.loading.present();
  }
 
  //Logout of account
  logout(){
    //logout
    this.authService.logout();
    //Reroute to login page
    this.navCtrl.setRoot(LoginPage);
 
  }
}
