import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import { MustMatch } from './must-match.validator';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent implements OnInit {
  public registerForm: FormGroup;
  public loginForm: FormGroup;
  public registerSportForm: FormGroup;
  public submitted = false;
  public loginDone: Boolean = false;
  public user: any;
  checked: boolean;
  Data: Array<any> = [
    { name: 'BasketBall', value: 'basketball' },
    { name: 'Football', value: 'football' },
    { name: 'Badminton', value: 'badminton' },
    { name: 'Snooker', value: 'snooker' },
    { name: 'FoosBall', value: 'foosball' },
    { name: 'Tennis', value: 'tennis' },
    { name: 'Golf', value: 'golf' },
    { name: 'TableTennis', value: 'tabletennis' },
  ];
  


  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  


  ngOnInit(): void {
    if(localStorage.getItem("token")){
      let data:any = localStorage.getItem("user")
      this.user = JSON.parse(data)
      this.loginDone = true
    }
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      game: this.formBuilder.array([], [Validators.required]),
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

    this.registerSportForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      sportName: ['', Validators.required],
      contact: ['', Validators.required],
      location: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

  }

  onCheckboxChange(e: any) {
    const game: FormArray = this.registerForm.get('game') as FormArray;
    if (e.target.checked) {
      game.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      game.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          game.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  get f() { return this.registerForm.controls; }

  async onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    
    // await this.http.post(`${environment.apiUrl}/user/create`, this.registerForm.value).subscribe((data:any) => {
    //   if (data.result.access_token && data.user) {
    //     localStorage.setItem("token", data.result.access_token)
    //     localStorage.setItem("user",JSON.stringify(data.user))
    //     this.user = data.user
    //     this.loginDone = true        
    //   }
    // })
  }

  async onSubmitLogin() {
    await this.http.post(`${environment.apiUrl}/user/login`, this.loginForm.value).subscribe((data:any) => {
      if (data.result.access_token && data.user) {
        localStorage.setItem("token", data.result.access_token)
        localStorage.setItem("user",JSON.stringify(data.user))
        this.user = data.user
        this.loginDone = true        
      }
    })
  }

  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    this.loginDone = false
  }

  onSportSubmit(){
    this.submitted = true;
    console.log(this.registerSportForm.value)
  }
  
}