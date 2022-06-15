import { Component, Inject, OnInit , ViewChild , ElementRef } from '@angular/core';
import { TalkService } from '../../services/talk.service';
import Talk from 'talkjs';



@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})

export class ShopComponent implements OnInit {
  
  private inbox!: Talk.Inbox;
  private session!: Talk.Session;
  @ViewChild('sp') sp!: ElementRef;

  ngOnInit(): void {
    this.createInbox();
  }
  constructor(private talkService: TalkService) { }
  private async createInbox() {
    const session = await this.talkService.createCurrentSession();
    this.inbox = await this.talkService.createInbox(session);
    console.log(this.inbox)
    this.inbox.mount(this.sp.nativeElement);
  }
}