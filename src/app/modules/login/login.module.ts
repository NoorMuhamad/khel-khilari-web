import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';



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
        ReactiveFormsModule
    ],
    providers: [
        
    ],
    bootstrap: [LoginComponent],
})
export class LoginModule { }
