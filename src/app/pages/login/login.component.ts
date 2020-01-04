import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'app/services/shared-data.service';
import { ApiService } from 'app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = 'peter@klaven';
  password = 'cityslicka';
  constructor(private api: ApiService, private shData: SharedDataService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    // this.api.login(this.email,this.password).subscribe(res => {
    // })
    if (this.email.length > 1 && this.password.length > 8) {
      this.shData.setLoggedIn(true);
      this.router.navigate(['/landing']);
    }
  }

}
