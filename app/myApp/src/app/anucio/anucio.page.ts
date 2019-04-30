import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController,ActionSheetController } from '@ionic/angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Estado } from '../../model/estado';
import { Cidades } from '../../model/cidades';
import {Camera,CameraOptions} from '@ionic-native/camera/ngx'
import { Categoria } from 'src/model/categoria';
import { SubCategoria } from 'src/model/sub-categoria';
import {File} from '@ionic-native/file/ngx'

@Component({
  selector: 'app-anucio',
  templateUrl: './anucio.page.html',
  styleUrls: ['./anucio.page.scss'],
})
export class AnucioPage implements OnInit {


  ngOnInit(): void {
    this.bonton();
    
    this.listaCategoria();
 
  }

  slidesEfect = {
    effect:'flip'
  }
    

     estadoSelect : Estado; // Foi criado para pegar a cidade vindo do fronte-end
     
     categoriaSelect:Categoria; // Foi criado para pegar a categoria vindo do fronte-end
     
     cidades : Cidades[]; // foi
 
     public estados: Estado[];

     validarCidades:boolean  
     
      validarCategoria:boolean;
     
      categoria : Categoria[];

      subCategoria : SubCategoria[];

     

  http : HttpClient;
  load;
  alert;

  constructor(
    public navCtrl: NavController, /** objeto que permite manipular as navegações e páginas do ionic */
    _http: HttpClient, /** Objeto que lida com as requisições http ao servidor (api) */
      private camera : Camera,
      private alertCtrl: AlertController,
      private loadingController: LoadingController,
       private actionSheetController: ActionSheetController,
       private file: File
  ) {
    this.validarCategoria=false;
    this.validarCidades = false;
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

async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Opções',
    buttons: [{
      text: 'Escolher foto',
      role: 'destructive',
      icon: 'folder',
      handler: () => {
        this.arquivoFile();
        
      }
    }, {
      text: 'Tirar foto',
      role: 'destructive',
      icon: 'camera',

      handler: () => {
        this.metodoCamera();
        
      }
    },{
    }
    ]
  });
  await actionSheet.present();

}

arquivoFile(){
  this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err =>
  console.log('Directory doesn'));
}
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

async presentLoadingCidade() {
  if(this.estadoSelect){
  this.selecionarCidade();
  const loading = await this.loadingController.create({
    message:"Aguarde Carregando Cidades",
    duration: 1000,
  });
  await loading.present();
}else{
  this.presentAlertCidade();
}
}

async presentLoadingCategoria() {
  if(this.categoriaSelect){
  this.listaSubCategoria();
  const loading = await this.loadingController.create({
    message:"Aguarde Carregando Cidades",
    duration: 1000,
  });
  await loading.present();
}else{
  this.presentAlertCategoria();
}
}

  
 
selecionarCidade(){
  console.log(this.estadoSelect ,"deu certo");
  this.http.get<Cidades[]>("http://localhost:3000/OLService/codigoEstado/"+this.estadoSelect.codigoEstado)
  .subscribe(
    question =>{
      console.log(question);
      this.cidades = question;
      
    },
    (err: HttpErrorResponse) =>{
      console.log(err.message);
});
  
  
}

async presentAlertCidade() {
  
  const alert = await this.alertCtrl.create({
    header: 'Atenção',
    subHeader: 'Não foi possivel carregar as cidades',
    message: 'Por favor selecione um estado',
    buttons: ['OK']
  });

  await alert.present();
  
}
async presentAlertCategoria() {
  
  const alert = await this.alertCtrl.create({
    header: 'Atenção',
    subHeader: 'Não foi possivel carregar as SubCategorias',
    message: 'Por favor selecione uma Categoria',
    buttons: ['OK']
  });

  await alert.present();
  
}
  listaCategoria() {
this.http.get<Categoria[]>("http://localhost:3000/OLService/categoria" )
.subscribe(
  question =>{
   this.categoria = question;
  },
  (err: HttpErrorResponse) =>{
    this.load.dismiss();
    this.alert.present();
  }
);
}

listaSubCategoria(){
  console.log(this.categoriaSelect ,"deu certo");
  this.http.get<SubCategoria[]>("http://localhost:3000/OLService/subCategoria/"+this.categoriaSelect.codigoCategoria)
  .subscribe(
    question =>{
      console.log(question);
      this.subCategoria = question;
    },
    (err: HttpErrorResponse) =>{
      console.log(err.message);
    }
  )}




back(){
  this.navCtrl.navigateBack('');
}

metodoCamera(){
const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64 (DATA_URL):
 let base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
});
}

}
