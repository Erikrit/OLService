import { Component, OnInit } from '@angular/core';
import { Cidades } from '../cidades';
import { Estado } from '../estado';
import { CidadesService } from '../cidades.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.page.html',
  styleUrls: ['./cidades.page.scss'],
})
export class CidadesPage implements OnInit {

  cidades : Cidades[];
 public estado = new Estado();

  http : HttpClient;
  load;
  alert;

  constructor(
    private cidadeService:CidadesService,
    public navCtrl: NavController, /** objeto que permite manipular as navegações e páginas do ionic */
    _http: HttpClient
  ){
    this.http = _http;
  }
  ngOnInit() {
  this.cidadesList();
  
}
cidadesList(){
  this.estado = this.cidadeService.getDestn();
  console.log(this.estado,"deu certo");
  this.http.get<Cidades[]>("http://localhost:3000/OLService/codigoEstado/"+this.estado.CodigoEstado)
  .subscribe(
    question =>{
      console.log(question);
      this.cidades = question;
    
    },
    (err: HttpErrorResponse) =>{
      this.load.dismiss();
      this.alert.present();
    }
  );
    

}
back(){
  this.navCtrl.pop();
}
ionViewWillEnter() {
  this.cidadesList();
}
ionViewDidLoad() {
  this.cidadesList();
}

}
