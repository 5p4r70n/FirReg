import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

   ngOnInit() {

  }

  async getAll (){
    const url= "http://127.0.0.1:3000/getCase"
    var caseData = await this.http.get(url)
    console.log('hai')
    console.log(caseData);
  }


}
