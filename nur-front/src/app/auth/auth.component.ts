import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public login;
  public password;
  public isAdmin = false;

  constructor(
    private provider: ProviderService,
    private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('Token');
  }

  auth() {
    if (this.login !== '' && this.password !== '') {
      this.provider.auth(this.login, this.password).then(res => {
        if(res.user.isAdmin){
          this.isAdmin = true;
        }
        localStorage.setItem('Token', res.token);
        if(this.isAdmin){
          this.router.navigateByUrl('adminka');
        } else {
          this.router.navigateByUrl('');
        }

      });
    }
  }

}
