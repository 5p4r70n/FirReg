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
 


  constructor(
    private http: HttpClient, private router: Router
  ) {}

  ngOnInit() {}


  async login() {
    console.log(this.Password)
    if (this.Password === '123')
    {
      this.router.navigate(['/MasterPage'])
    } else {
      console.log("Password Missmatch");
      }

  }}
