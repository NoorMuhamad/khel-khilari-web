import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TalkService } from '../../services/talk.service';
import Talk from 'talkjs';
import { } from 'googlemaps';



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

  @ViewChild('sp') sp!: ElementRef;
  @ViewChild('map') mapElement: any;
  map!: google.maps.Map;

  constructor(private talkService: TalkService) { }
  ngOnInit(): void {
    this.createInbox();
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

  }
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
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

}