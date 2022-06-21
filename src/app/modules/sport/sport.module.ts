import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SportComponent } from './sport.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatDialogModule } from '@angular/material/dialog';
const routes: Routes = [
	{ path: '', component: SportComponent },
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		DragDropModule,
		MatDialogModule
	],
})
export class SportModule { }
