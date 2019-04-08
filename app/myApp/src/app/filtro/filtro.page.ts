import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.page.html',
  styleUrls: ['./filtro.page.scss'],
})
export class FiltroPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    
  ) { }
  back(){
    this.navCtrl.navigateBack('');
  }


  ngOnInit() {
  }

}
