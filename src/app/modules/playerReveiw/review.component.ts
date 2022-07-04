import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ThemePalette } from '@angular/material/core';

type Rating = {
  value: number;
  max: number;
  name:string
  id?:string
};


@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})

export class ReviewComponent implements OnInit {
  public allUsers:any
  public test :any =[]
  football: Rating[] = [
    {
      name:'football',
      value: 0,
      max: 5,
    },
  ];
  badminton: Rating[] = [
    {
      name:'badminton',
      value: 0,
      max: 5,
      
    },
  ];
  cricket: Rating[] = [
    {
      name:'cricket',
      value: 0,
      max: 5,
      
    },
  ];
  snooker: Rating[] = [
    {
      name:'snooker',
      value: 0,
      max: 5,
      
    },
  ];
  basketBall: Rating[] = [
    {
      name:'basketBall',
      value: 0,
      max: 5,
      
    },
  ];

  tableTennis: Rating[] = [
    {
      name:'tableTennis',
      value: 0,
      max: 5,
      
    },
  ];
  golf: Rating[] = [
    {
      name:'golf',
      value: 0,
      max: 5,
      
    },
  ];
  tennis: Rating[] = [
    {
      name:'tennis',
      value: 0,
      max: 5,
      
    },
  ];
  foosball: Rating[] = [
    {
      name:'foosball',
      value: 0,
      max: 5,
      
    },
  ];
  ngOnInit(): void{
    // this.http.get(`${environment.apiUrl}/user/allUsers`).subscribe((data)=>{
    //   this.allUsers = data
    // })
  }

  constructor(private http: HttpClient) {
    this.http.get(`${environment.apiUrl}/user/allUsers`).subscribe((data: any) => {
      if (data) {
        data.map((a: any) => {
          this.test.push({
            name: a.firstName, id: a._id,
            football: this.football,
            badminton: this.badminton,
            snooker: this.snooker,
            cricket: this.cricket,
            basketBall: this.basketBall,
            foosball: this.foosball,
            tennis: this.tennis,
            golf: this.golf,
            tableTennis: this.tableTennis,
          })
        })
        this.dataSource = new MatTableDataSource(this.test);
      }
    })
  }
 
  ratingData(gamePoint: any) {

    if(gamePoint.name==='football'){
      console.log(gamePoint)
      this.http.put(`${environment.apiUrl}/user/update/${gamePoint.id}`,{football:gamePoint.value}).subscribe((data)=>{
          
      })
      
    }
    else if(gamePoint.name==='badminton'){
      this.http.put(`${environment.apiUrl}/user/update/${gamePoint.id}`,{badminton:gamePoint.value}).subscribe((data)=>{
        
    })
    }
    else if(gamePoint.name==='snooker'){
      this.http.put(`${environment.apiUrl}/user/update/${gamePoint.id}`,{snooker:gamePoint.value}).subscribe((data)=>{
        
    })
    }
    else if(gamePoint.name==='cricket'){
      this.http.put(`${environment.apiUrl}/user/update/${gamePoint.id}`,{cricket:gamePoint.value}).subscribe((data)=>{
        
    })
    }
    else if(gamePoint.name==='foosball'){
      this.http.put(`${environment.apiUrl}/user/update/${gamePoint.id}`,{foosball:gamePoint.value}).subscribe((data)=>{
        
    })
    }
    else if(gamePoint.name==='tennis'){
      this.http.put(`${environment.apiUrl}/user/update/${gamePoint.id}`,{tennis:gamePoint.value}).subscribe((data)=>{
        
    })
    }
    else if(gamePoint.name==='golf'){
      this.http.put(`${environment.apiUrl}/user/update/${gamePoint.id}`,{golf:gamePoint.value}).subscribe((data)=>{
        
    })
    }
    else if(gamePoint.name==='tableTennis'){
      this.http.put(`${environment.apiUrl}/user/update/${gamePoint.id}`,{tableTennis:gamePoint.value}).subscribe((data)=>{
        
    })
    }
    else if(gamePoint.name==='basketBall'){
      this.http.put(`${environment.apiUrl}/user/update/${gamePoint.id}`,{basketBall:gamePoint.value}).subscribe((data)=>{
        
    })
    }
  }

  displayedColumns = ['name', 'football', 'badminton','snooker','cricket','basketBall','foosball','tennis','golf','tableTennis'];
  dataSource: MatTableDataSource<UserData>;

 

}


export interface UserData {
  name: string;
  id:number
  football: Rating[];
  badminton: Rating[];
  snooker: Rating[];
  cricket: Rating[];
  basketBall: Rating[];
  foosball: Rating[];
  tennis: Rating[];
  golf: Rating[];
  tableTennis: Rating[]
}