import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../sport/sport.component';



@Component({
  selector: 'teamDialog',
  templateUrl: './teamDialog.component.html',
  styleUrls: ['./teamDialog.component.scss']
})

export class TeamDialog implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  ngOnInit(): void {
    
  }


}