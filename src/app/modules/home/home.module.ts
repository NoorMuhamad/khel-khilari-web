import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { GoogleMapsModule } from '@angular/google-maps'




const routes: Routes = [
	{ path: '', component: HomeComponent },
];

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		GoogleMapsModule,
	],
})
export class HomeModule { }
