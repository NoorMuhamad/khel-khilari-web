import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './modules/nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { GenericService } from './services/generic.service';
import { BaseService } from './services/base.service';
import { SportComponent } from './modules/sport/sport.component';
import { TalkService } from './services/talk.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
    SportComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BaseService, GenericService,TalkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
