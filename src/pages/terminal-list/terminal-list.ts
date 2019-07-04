import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Terminals } from "../../providers";
import { Terminal } from '../../models';

@IonicPage({
  name: 'page-terminal-list',
  segment: 'terminal-list'
})

@Component({
    selector: 'page-terminal-list',
    templateUrl: 'terminal-list.html'
})
export class TerminalListPage {

  terminals: Array<Terminal> = [];
  public photo: string = '/assets/img/bus-logo.jpg';

  constructor(public navCtrl: NavController,
    public terminalService: Terminals) {
      this.terminals = this.terminalService.query();
  }

}
