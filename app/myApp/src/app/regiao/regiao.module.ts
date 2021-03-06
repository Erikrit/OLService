import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegiaoPage } from './regiao.page';
//import {HttpModule} from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    component: RegiaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegiaoPage]
})
export class RegiaoPageModule {}
