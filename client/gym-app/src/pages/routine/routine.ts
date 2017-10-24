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
  public myForm: FormGroup;
  edit: boolean;
  routine: RoutineModel;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private _fb: FormBuilder) {
    let rout = new SubRoutine("",0,0);
    this.routine = new RoutineModel("", [rout]);

    this.myForm = this._fb.group({
      routineName: ['', [Validators.required, Validators.minLength(6)]],
      subroutines: this._fb.array([
        this.initSubRoutine(),
        ]),
      rid: ['']
    });

    if(navParams.get('routine') != null)
    {
      this.edit = navParams.get('edit');
      this.routine = navParams.get('routine');

      this.myForm.patchValue({
        routineName: this.routine.routineName,
        rid: this.routine.rid
      })

      for(var i = 0; i < this.routine.sets.length-1; i++)
      {
        this.addSubRoutine(false);
      }
    }
  }

  //dismiss modal
  closeModal() {
    this.viewCtrl.dismiss();
  }

  submitModal(formi) {
    console.log(JSON.stringify(formi.value));
    this.viewCtrl.dismiss({routineName: formi.value.routineName, subroutines: formi.value.subroutines, rid: formi.value.rid});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoutinePage');
  }

  initSubRoutine(){
    return this._fb.group({
      setExercise:['', Validators.required],
      repAmount:[''],
      setTime:['']
    });
  }
  addSubRoutine(addSub){
    if (addSub == true)
    {
      let rout = new SubRoutine("default",0,0);
      this.routine.sets.push(rout);
    }
    const control = <FormArray>this.myForm.controls['subroutines'];
    control.push(this.initSubRoutine());
  }

  removeSubRoutine(i: number){
    console.log(i-1);
    const control = <FormArray>this.myForm.controls['subroutines'];
    control.removeAt(i);
  }
}
