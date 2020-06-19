import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-pwd';

  valid: BehaviorSubject<any> = new BehaviorSubject(false);
  password = '';

  options = {
    length: 10,
    color: '#f44336',
    hideAfterUse: true
  };

  useRecPwd (pwd: string) {
    this.password = pwd;
  }
}
