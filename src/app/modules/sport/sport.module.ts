import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SportComponent } from './sport.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
const routes: Routes = [
	{ path: '', component: SportComponent },
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		DragDropModule
	],
})
export class SportModule { }
