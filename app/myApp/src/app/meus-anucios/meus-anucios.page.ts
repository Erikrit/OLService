import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-meus-anucios',
  templateUrl: './meus-anucios.page.html',
  styleUrls: ['./meus-anucios.page.scss'],
})
export class MeusAnuciosPage implements OnInit {

  constructor(public navCtrl: NavController,) { }

  ngOnInit() {
  }
  back(){
    this.navCtrl.navigateBack('');
  }
}
