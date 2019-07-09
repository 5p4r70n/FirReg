import { Component, OnInit } from '@angular/core';
import {
  HttpClient
} from "@angular/common/http"
import { from } from 'rxjs';

@Component({
  selector: 'app-fir',
  templateUrl: './fir.component.html',
  styleUrls: ['./fir.component.css']
})
export class FirComponent implements OnInit {

  Prathy = '';
  Vaadi = '';
  Tittle = '';
  CType = '';
  WriteUp = '';
  image: File;
  msgData:Object={data:false};


  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log ('Haiii');
    let newFir ={Prathy:this.Prathy,Vaadi:this.Vaadi,Tittle:this.Tittle,WriteUp:this.WriteUp,image:this.image}
    console.log(newFir);
  }

}
