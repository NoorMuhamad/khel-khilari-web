import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {


  constructor(private http: HttpClient ) {
  }

  private async request(method: string, url: string, data?: any, responseType?: any) {

    const result = this.http.request(method, url, {
      body: data,
      responseType: responseType || 'json',
      observe: 'body',
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  ngOnInit(): void {
    
    this.http.get(`${environment.apiUrl}/user/allUsers`).subscribe((res)=>{
      console.log(res)
    })
    console.log(this.request('get', `${environment.apiUrl}/user/allUsers`));
    
  }
}