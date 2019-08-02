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

  Password: string;
  MasterPass: string;


  constructor(
    private http: HttpClient, private router: Router
  ) {}

  async ngOnInit() {
    const url = ' http://127.0.0.1:3000/getPoSt';
    var get = this.http.get(url);
    var res = get.subscribe();
    console.log(res + " policestation return from server") ;


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

  }}
