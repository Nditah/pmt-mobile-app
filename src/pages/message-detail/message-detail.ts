import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Messages } from '../../providers';


@IonicPage({
	name: 'page-message-detail',
	segment: 'message/:id'
})

@Component({
  selector: 'page-message-detail',
  templateUrl: 'message-detail.html'
})

export class MessageDetailPage {
	param: number;
	message: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public messageService: Messages) {
    this.param = this.navParams.get('id');
    const [record] = this.messageService.query({ id: this.param });
    console.log(record);
  	this.message = record ? record : this.messageService.messages[0];
  }

  ionViewDidLoad() {
    console.log('MessageDetailPage ionViewDidLoad');
  }

  updateStatus(){
    this.messageService.recordUpdate(this.message, { receive_status: 'READ' })
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message));
  }

}
