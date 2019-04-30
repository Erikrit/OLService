import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.page.html',
  styleUrls: ['./minha-conta.page.scss'],
})
export class MinhaContaPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    
  ) { }
  back(){
    this.navCtrl.navigateBack('');
  }
  ngOnInit() {

  }

  feedBack(){
    this.navCtrl.navigateForward('feed-back');
  }

  meusAnucios(){
    this.navCtrl.navigateForward('meus-anucios');
  }




}
