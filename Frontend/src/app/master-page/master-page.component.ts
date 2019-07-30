import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent implements OnInit {

  cF: any;

  constructor(
    private http: HttpClient
  ) { }

   ngOnInit() {
    const url= "http://127.0.0.1:3000/getCase"
    this.http.get(url).subscribe((res)=>{
    // console.log(res);
    this.cF= res;
    console.log(res[0].Prathy);
  })

  }

  getAll (){
  }
}
