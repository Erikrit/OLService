import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  constructor(
    public navCtrl: NavController,
    
  ) { }

  categoria(){
    this.navCtrl.navigateRoot('categoria');
  }
  regiao(){
    this.navCtrl.navigateRoot('regiao');
  }
  filtro(){
    this.navCtrl.navigateRoot('filtro');
  }
}
