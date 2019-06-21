import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Messages } from '../../providers';

@IonicPage({
	name: 'page-message-list',
	segment: 'message-list'
})

@Component({
    selector: 'page-message-list',
    templateUrl: 'message-list.html'
})
export class MessageListPage {

    messages: Array<any> = [];

    constructor(public navCtrl: NavController,
        public messageService: Messages) {
        this.messages = messageService.query() || [];
    }

    itemTapped(message) {
        this.navCtrl.push('page-message-detail', {
	      'id': message.id
	    });
    }

    deleteItem(message) {
        this.messageService.delete(message);
    }

}
