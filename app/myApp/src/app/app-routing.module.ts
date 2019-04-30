import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'categoria', loadChildren: './categoria/categoria.module#CategoriaPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'regiao', loadChildren: './regiao/regiao.module#RegiaoPageModule' },
  { path: 'filtro', loadChildren: './filtro/filtro.module#FiltroPageModule' },
  { path: 'favoritos', loadChildren: './favoritos/favoritos.module#FavoritosPageModule' },
  { path: 'minha-conta', loadChildren: './minha-conta/minha-conta.module#MinhaContaPageModule' },
  { path: 'ajuda', loadChildren: './ajuda/ajuda.module#AjudaPageModule' },
  { path: 'cidades', loadChildren: './cidades/cidades.module#CidadesPageModule' },
  { path: 'anucio', loadChildren: './anucio/anucio.module#AnucioPageModule' },
  { path: 'meus-anucios', loadChildren: './meus-anucios/meus-anucios.module#MeusAnuciosPageModule' },
  { path: 'feed-back', loadChildren: './feed-back/feed-back.module#FeedBackPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
