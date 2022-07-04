import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReviewComponent } from './review.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxMaterialRatingModule } from 'ngx-material-rating';




const routes: Routes = [
	{ path: '', component: ReviewComponent },
];

@NgModule({
	declarations: [
		ReviewComponent
	],
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		MatFormFieldModule,
		GoogleMapsModule,
		MatTableModule,
		MatPaginatorModule,
		NgxMaterialRatingModule
	],
})
export class ReviewModule { }
