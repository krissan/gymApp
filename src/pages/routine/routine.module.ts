import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoutinePage } from './routine';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RoutinePage,
  ],
  imports: [
    IonicPageModule.forChild(RoutinePage),
    CommonModule
  ],
})
export class RoutinePageModule {}
