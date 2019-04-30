import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
//import { Http} from '@angular/http';
import { Estado } from '../../model/estado';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { CidadesService } from '../../services/cidades.service';
import { Cidades } from '../../model/cidades';




@Component({
  selector: 'app-regiao',
  templateUrl: './regiao.page.html',
  styleUrls: ['./regiao.page.scss'],
})
export class RegiaoPage implements OnInit {
  
  

  ngOnInit(): void {
    this.bonton();
  }
 


 
     public estados: Estado[];

  http : HttpClient;
  load;
  alert;

;
  constructor(
    public navCtrl: NavController, /** objeto que permite manipular as navegações e páginas do ionic */
    _http: HttpClient, /** Objeto que lida com as requisições http ao servidor (api) */
    private cidade : CidadesService
    //private _loadCtr: LoadingController /** permite criar um loading para informar ao cliente carregando lista*/,
    //private _alert: AlertController /** objeto para construir componentes alertas */
  ) {

    /**objeto http responsável por efetuar as requisições ao backend (api) */
    this.http = _http;
    /**loader que apresenta ao usuário que a listagem está sendo carregada, assim o usuário não fica esperando  */
   
    /**o método presente permite mostrar o componente craido load */
    

    /**cria-se um novo componente alerta para informar que houve falha de conexão */
   
  }

  /** 
   * Primeiro método executado quando a paǵina é carregada na pilha de execução.
   * Este método é executado apenas uma única vez. Só é executado novamente quando a página é carregada novamente. 
   * Quando é executado pop em uma página subsequente, volta-se para esta página, porém, este método não é carregado novamente. 
 */
  bonton() {
   
this.http.get<Estado[]>("http://localhost:3000/OLService" )
.subscribe(
  question =>{
   this.estados = question;
  },
  (err: HttpErrorResponse) =>{
    this.load.dismiss();
    this.alert.present();
  }
);
  
}
 
estado(estado:Estado){
  this.cidade.setDestin(estado);
  this.navCtrl.navigateForward('cidades')
  
  } 
   



back(){
  this.navCtrl.navigateBack('');
}


}