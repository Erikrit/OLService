import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
  saudeM =false;

  paraSuaC =false;

  contru = false;

  veiculos = false;

  constructor(
    public navCtrl: NavController,
    
  ) { }

  
  ngOnInit() {
  }
  
  back(){
    this.navCtrl.navigateBack('');
  }
  Saude(){


    this.paraSuaC =false;

    this. contru = false;

    this.veiculos = false;
    if(!this.saudeM){
      this.saudeM = true;
    }else{
      this.saudeM=false;
    }
  }
  construcaoF(){
    this.saudeM =false;
    this.paraSuaC =false;
    this.veiculos = false;
    if(!this.contru){
      this.contru = true;
    }else{
      this.contru=false;
    }
  }
  VeiculoF(){
    this.saudeM =false;

    this.paraSuaC =false;

    this. contru = false;

    if(!this.veiculos){
      this.veiculos = true;
    }else{
      this.veiculos=false;
    }
  }
  paraSucaCasaF(){
    this.saudeM =false;
    this.contru = false;
    this.veiculos = false;

    if(!this.paraSuaC){
      this.paraSuaC = true;
    }else{
      this.paraSuaC=false;
    }
  }

}
