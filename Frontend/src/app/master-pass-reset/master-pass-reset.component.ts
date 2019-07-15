import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { from } from 'rxjs';

@Component({
  selector: 'app-master-pass-reset',
  templateUrl: './master-pass-reset.component.html',
  styleUrls: ['./master-pass-reset.component.css']
})
export class MasterPassResetComponent implements OnInit {

  MasterPass = '';

  constructor(
    private http: HttpClient
  ) {
   }

  ngOnInit() {


  }
  onSubmit() {

    console.log(this.MasterPass);
    let pass=this.MasterPass
    let url = "http://127.0.0.1:3000/MasterPassReset";
    console.log(pass)
    this.http.post(url, {MP : pass}).subscribe((data: any) => {
      console.log(data);
    })

  }

}
