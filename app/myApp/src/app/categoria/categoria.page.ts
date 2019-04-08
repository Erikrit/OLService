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

  public construcao =[
    {
      title: 'Eletricista',
      url: '/',
      icon: ''
    },
  {
    title: 'Pedreiro',
    url: '/',
    icon: 'list'
  },
  {
    title: 'Mestre de obra',
    url: '/list',
    icon: 'list'
  },
  {
    title: 'Rede',
    url: '/list',
    icon: 'list'
  },
  {
    title: 'Engelheiro',
    url: '/list',
    icon: 'list'
  },
    {
      title: 'Arquiteto',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Pintor',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Gesseiro',
      url: '/list',
      icon: 'list'
    }]
  
    public paraCasa= [
    
      {
        title: 'Eletricista',
        url: '/',
        icon: ''
      },
    {
      title: 'Pedreiro',
      url: '/',
      icon: 'list'
    },
    {
      title: 'Instalador CFTV',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Tecnico de Informatica',
      url: '/list',
      icon: 'list'
    },
      {
        title: 'Pintor',
        url: '/list',
        icon: 'list'
      }]
     
      public saude= [
    
        {
          title: 'Tecnica de Enfermage',
          
        },
      {
        title: 'Enfermeiro',
        
        icon: 'list'
      },
      {
        title: 'Especialidades Medicas',
        url: '/list',
        icon: 'list'
      },
      {
        title: 'Cuidadores de idosos',
        url: '/list',
        icon: 'list'
      }]
  
      public veiculo= [
    
        {
          title: 'Carro',
          url: '/',
          icon: ''
        },
      {
        title: 'Moto',
        url: '/',
        icon: 'list'
      },
      {
        title: 'Onibus e caminhão',
        url: '/list',
        icon: 'list'
      },
      {
        title: 'Outros',
        url: '/list',
        icon: 'list'
      }]
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
