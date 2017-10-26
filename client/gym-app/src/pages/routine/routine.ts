import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { SubRoutine } from '../../app/models/routine-model';
import { RoutineModel } from '../../app/models/routine-model';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

/**
 * Generated class for the RoutinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-routine',
  templateUrl: 'routine.html',
})
export class RoutinePage {
  public myForm: FormGroup;    //Routine Form
  edit: boolean;               //Is routine meant to be edit of existing
  routineO: RoutineModel;      //Routine Model

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private _fb: FormBuilder) {
    //Instantiate empty routine object
    this.routineO = new RoutineModel("", [], "");

    //Instantiate form for routine inputs
    this.myForm = this._fb.group({
      routineName: ['', [Validators.required, Validators.minLength(6)]],
      subroutines: this._fb.array([])
    });

    //If recieved navparams then routine meant to be edit
    if(navParams.get('routine') != null)
    {
      this.edit = navParams.get('edit');

      //Populate form with routine to be editeds routine name and sets
      this.routineO.routineName = navParams.get('routine').routineName;
      this.myForm.patchValue({
        routineName: this.routineO.routineName
      })      
      for(var i = 0; i < navParams.get('routine').sets.length ; i++)
      {
        this.routineO.sets.push(navParams.get('routine').sets[i]);
        this.addSubRoutine(false);
      }
    }
  }

  //dismiss modal
  closeModal() {
    this.viewCtrl.dismiss();
  }

  //Pass routine data back to caller
  submitModal(formi) {
    this.viewCtrl.dismiss({routineName: formi.value.routineName, subroutines: formi.value.subroutines, rid: formi.value.rid});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoutinePage');
  }

  //Initialize form set
  initSubRoutine(){
    return this._fb.group({
      setExercise:['', Validators.required],
      repAmount:[''],
      setTime:['']
    });
  }

  //Add set to end of form
  addSubRoutine(addSub){
    //If 
    if (addSub == true)
    {
      let rout = new SubRoutine("default",0,0);
      this.routineO.sets.push(rout);
    }
    const control = <FormArray>this.myForm.controls['subroutines'];
    control.push(this.initSubRoutine());
  }

  //Remove set from form and routineO array
  removeSubRoutine(i: number){
    const control = <FormArray>this.myForm.controls['subroutines'];
    control.removeAt(i);
    this.routineO.sets.splice(i,1);
  }
}
