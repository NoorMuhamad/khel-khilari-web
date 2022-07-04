import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VenueComponent } from './venue.component';





const routes: Routes = [
	{ path: '', component: VenueComponent },
];

@NgModule({
	declarations: [
		VenueComponent
	],
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
	],
})
export class VenueModule { }
