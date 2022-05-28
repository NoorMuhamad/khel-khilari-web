import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'KHEL KHILARI';
  router: string;

  constructor(_router: Router) {

    this.router = _router.url;
    console.log(this.router)

  }
}
