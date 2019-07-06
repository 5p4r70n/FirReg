import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { from } from 'rxjs';

@Component({
  selector: 'app-master-pass-reset',
  templateUrl: './master-pass-reset.component.html',
  styleUrls: ['./master-pass-reset.component.css']
})
export class MasterPassResetComponent implements OnInit {

  MasterPass=""

  constructor() {
   }

  ngOnInit() {

      
  }
  onSubmit() {
    console.log(this.MasterPass)
  }

}
