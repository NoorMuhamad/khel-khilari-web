import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatButtonToggleModule } from "@angular/material/button-toggle"



const routes: Routes = [
	{ path: '', component: LoginComponent },
];

@NgModule({
	
	declarations: [
        LoginComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,   
        FormsModule,
        ReactiveFormsModule,
        MatButtonToggleModule,
        NgCircleProgressModule.forRoot({
            // set defaults here
            radius: 100,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: "#78C000",
            innerStrokeColor: "#C7E596",
            animationDuration: 300,
          })
    ],
    providers: [
        
    ],
    bootstrap: [LoginComponent],
})
export class LoginModule { }
