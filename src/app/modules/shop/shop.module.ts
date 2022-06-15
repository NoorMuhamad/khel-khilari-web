import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';





const routes: Routes = [
	{ path: '', component: ShopComponent },
];

@NgModule({
	declarations: [
		ShopComponent
	],
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
	],
})
export class ShopModule { }
