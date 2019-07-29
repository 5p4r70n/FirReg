import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  StationName: string;
  Password: string;

  constructor(
private http: HttpClient
  ) { }

  ngOnInit() {
  }

  signUp(){
    const url = 'http://127.0.0.1:3000/signUp';
    let station =  {StationName : this.StationName,Password: this.Password};
    this.http.post(url,{station}).subscribe(data =>  function(data){
      console.log(data)
    })

  }

}
