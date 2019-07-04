import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CityListPage } from './city-list';

@NgModule({
  declarations: [
    CityListPage
  ],
  imports: [
    IonicPageModule.forChild(CityListPage)
  ],
  exports: [
    CityListPage
  ]
})

export class FavoriteListPageModule { }
