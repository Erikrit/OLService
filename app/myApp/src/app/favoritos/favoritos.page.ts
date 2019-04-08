import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  
  constructor(
    public navCtrl: NavController,
    
  ) { }
  back(){
    this.navCtrl.navigateBack('');
  }
  
  
  ngOnInit() {
  }

}
