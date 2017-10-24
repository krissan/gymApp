import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { RoutinesProvider } from '../../providers/routines/routines';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { RoutinePage} from '../routine/routine';
import { RoutineModel } from '../../app/models/routine-model';
import { SubRoutine } from '../../app/models/routine-model';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  routines: RoutineModel[]
  loading: any;

  constructor(public navCtrl: NavController, public routineService: RoutinesProvider, public modalCtrl: ModalController,
   public authService: AuthProvider, public loadingCtrl: LoadingController) {
 
  }

  ionViewDidLoad(){
    this.reloadRoutines();
  }

  addRoutine(){
  	let routineModal = this.modalCtrl.create(RoutinePage);
   	routineModal.onDidDismiss(data => {
   		if (data)
   		{
   			this.showLoader();       

   			this.routineService.createRoutine({routineName: data.routineName, subroutines: data.subroutines, userid: this.authService.userid}).then((result) => {
   		    this.loading.dismiss();
          this.reloadRoutines();

   			}, (err) => {
   				this.loading.dismiss();
   				console.log("not allowed" + err);
   			});
   		}
   	});
    routineModal.present();
  }

  deleteRoutine(routine){
 
    this.showLoader();

    //Remove from database
    this.routineService.deleteRoutine(routine.rid).then((result) => {
 
      this.loading.dismiss();
 
      //Remove locally
        let index = this.routines.indexOf(routine);
 
        if(index > -1){
            this.routines.splice(index, 1);
        }
    }, (err) => {
      this.loading.dismiss();
        console.log("not allowed");
    });
  }

  editRoutine(routine){
     let routineModal = this.modalCtrl.create(RoutinePage, {routine: routine, edit: true});
     routineModal.onDidDismiss(data => {
       if (data)
       {
         this.showLoader();       

         this.routineService.editRoutine({routineName: data.routineName, subroutines: data.subroutines, rid: data.rid, userid: this.authService.userid}).then((result) => {
           this.loading.dismiss();
          this.reloadRoutines();
         }, (err) => {
           this.loading.dismiss();
           console.log("not allowed" + err);
         });
       }
     });
    routineModal.present();
  }

  reloadRoutines()
  {
    this.routineService.getRoutines().then((data) => {
      this.routines = [];

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
        console.log("not allowed" + err);
    });
  }
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
 
  }
 
  logout(){
 
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
 
  }
}
