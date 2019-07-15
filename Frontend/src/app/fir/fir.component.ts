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
  msgData: Object = {data: false};


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    let url='http://127.0.0.1:3000/fir'
    const newFir ={Prathy: this.Prathy,Vaadi:this.Vaadi,Tittle:this.Tittle,WriteUp:this.WriteUp,image:this.image}
    console.log(newFir);
    this.http.post(url,JSON.stringify({FirItem: newFir})).subscribe(data=>function(data){
      console.log(data);
    })

  }

}
