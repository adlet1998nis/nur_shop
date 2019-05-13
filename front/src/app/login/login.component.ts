import { Component, OnInit } from '@angular/core';
import {ProviderService} from "../shared/services/provider.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login = '';
  public password = '';
  public isLogged = false;
  constructor(
    private provider: ProviderService,
  ) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogged = true;
    }
  }

  auth() {
    if (this.login !== '' && this.password !== '') {
      this.provider.auth(this.login, this.password).then(res => {
        localStorage.setItem('token', res.token);
        this.isLogged = true;
      });
    }
  }

}
