import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import Talk from 'talkjs';
import { TalkService } from '../../services/talk.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TeamDialog } from '../teamDialogue/teamDialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})


export class SportComponent implements OnInit {


  public checkGame: any
  public gameName: any
  private inbox!: Talk.Inbox;
  private session!: Talk.Session;
  public registerTeamForm: FormGroup;
  public submitted = false;

  @ViewChild('sp') sp!: ElementRef;

  constructor(private talkService: TalkService, public dialog: MatDialog , private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.createInbox();
    this.registerTeamForm = this.formBuilder.group({
      teamName: ['', Validators.required],
      ownerName: ['', Validators.required],
      coachName: ['', Validators.required],
    });
  }


  

  players = [
    'Player - Wade',
    'Player - smith',
    'Player - Ali',
    'Player - Faisal',
    'Player - Nabeel',
    'Player - Arslan',
    'Player - Rasheed',
    'Player - Nasir',
    'Player – Jorge',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.players, event.previousIndex, event.currentIndex);
  }

  teams = [
    'Team - karachi Kings',
    'Team - Lahore Qalanders',
    'Team - Multan sultan',
  ];

  dropTeam(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.teams, event.previousIndex, event.currentIndex);
  }

  game(game: any) {
    this.checkGame = true
    console.log(game)
    this.gameName = game
  }
  private async createInbox() {
    const session = await this.talkService.createCurrentSession();
    this.inbox = await this.talkService.createInbox(session);
    console.log(this.inbox)
    this.inbox.mount(this.sp.nativeElement);
  }

  createTeam(){
    this.submitted = true;

  }

  onTeamSubmit(){
    console.log(this.registerTeamForm.value)
    let data = {...this.registerTeamForm.value, userId:'12345'}
    console.log(data)
    this.submitted = false;
  }

}