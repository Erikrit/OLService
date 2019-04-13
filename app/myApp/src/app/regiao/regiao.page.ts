import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';
import { Estado } from '../estado';
import { Http} from '@angular/http';
import { Http2ServerResponse } from 'http2';
import { HttpClient } from 'selenium-webdriver/http';





@Component({
  selector: 'app-regiao',
  templateUrl: './regiao.page.html',
  styleUrls: ['./regiao.page.scss'],
})
export class RegiaoPage implements OnInit {
 

 
  estados: Estado[];
  http : Http;
  load;
  alert;

  constructor(
    public navCtrl: NavController, /** objeto que permite manipular as navegações e páginas do ionic */
    private _http: Http /** Objeto que lida com as requisições http ao servidor (api) */
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
this.http.get("http://localhost:3000/OLService", )
.subscribe(
  (question) =>{
    console.log(question);
    
    this.load.dismiss();
  },
  (err: HttpClient) =>{
    this.load.dismiss();
    this.alert.present();
  }
);
  
}



    /**
     * Método que vai ao servidor por meio do método GET e o recurso /usuario 
     * Por default, é retornado uma lista de objetos, e eu faço parse da lista por meio do <Usuario[]>, desta forma eu tenho uma
     * lista de Usuário.
     * Tenho o subscribe, com as promessas, se deu tudo certo e eu tenho uma lista de usuários. Ou retorna exceção, e eu tenho 
     * o HttpErrorResponse. 
     * */
    
  

  
  ngOnInit() {
   
}
}