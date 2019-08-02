import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http'
import {
  Router
} from "@angular/router"
import {
  from
} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Password: string; // received from frontend
  MasterPass: string; // received from server

  Station:any; //respose received from server
  StationAddr: any; // received from frntend
  StPass: any; //received from frnt end



  constructor(
    private http: HttpClient, private router: Router
  ) {}

  ngOnInit() { // this will load the station lists from blockchain on startup
    const url = ' http://127.0.0.1:3000/getPoSt';
    this.http.get(url).subscribe((res)=>{
      // console.log(res + "Police station response");
      this.Station= res;
      //console.log(res[1].name + "response" );
    })

  }

  login() {
    const url= 'http://127.0.0.1:3000/getMpass';
    this.http.get(url).subscribe((res : string) => {
      console.log(res[0]);
      this.MasterPass = res[0];
    })
    console.log(this.Password)
    if (this.Password === this.MasterPass)
    {
      this.router.navigate(['/MasterPage'])
    } else {
      console.log('Password Missmatch');
      }

  }

  StLog() {


  }
}
