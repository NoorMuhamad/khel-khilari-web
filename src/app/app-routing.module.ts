import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path: 'about',loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)},
  {path: '',loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'sport',loadChildren: () => import('./modules/sport/sport.module').then(m => m.SportModule)},
  {path: 'login',loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path: 'shops',loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
