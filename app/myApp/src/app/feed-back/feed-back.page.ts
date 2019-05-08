import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.page.html',
  styleUrls: ['./feed-back.page.scss'],
})
export class FeedBackPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

back(){
  this.navCtrl.navigateBack('');
}
}
