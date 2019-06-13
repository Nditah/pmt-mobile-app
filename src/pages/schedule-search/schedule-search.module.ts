import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleSearchPage } from './schedule-search';

@NgModule({
  declarations: [
    ScheduleSearchPage
  ],
  imports: [
    IonicPageModule.forChild(ScheduleSearchPage)
  ],
  exports: [
    ScheduleSearchPage
  ]
})

export class ScheduleSearchModule { }
