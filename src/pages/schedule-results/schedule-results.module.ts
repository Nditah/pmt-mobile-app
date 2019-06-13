import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleResultsPage } from './schedule-results';

@NgModule({
  declarations: [
    ScheduleResultsPage
  ],
  imports: [
    IonicPageModule.forChild(ScheduleResultsPage)
  ],
  exports: [
    ScheduleResultsPage
  ]
})

export class ScheduleResultsModule { }
