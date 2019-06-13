import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TerminalListPage } from './terminal-list';

@NgModule({
  declarations: [
    TerminalListPage
  ],
  imports: [
    IonicPageModule.forChild(TerminalListPage)
  ],
  exports: [
    TerminalListPage
  ]
})

export class FavoriteListPageModule { }
