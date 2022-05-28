import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { About } from './about.component';


const routes: Routes = [
	{ path: '', component: About },
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
	],
})
export class AboutModule { }
