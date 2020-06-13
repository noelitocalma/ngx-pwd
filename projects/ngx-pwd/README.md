# NgxPwd

- Password strength meter with generator all in one

## Installation

`
npm i ngx-pwd
`

## API
```
import { NgxPwdModule } from 'ngx-pwd';


-- HTML --

<ngx-pwd [options]="options" [password]="password" [valid]="valid" (useRecPW)="useRecPwd($event)"></ngx-pwd>

````

### @Inputs()

| Input            | Type         | Required                   | Description                                                                                               |
| ---------------- | -----------  | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| password         | string       | ***YES***                  | Password to check                                                                                         |
| valid            | Observable   | Optional                   | returns if password is valid                                                                              |
| options          | object       | **NO**                     | NgxPwdOptions                                                                      |

### @Output()

| Output           | Type         | Required                   | Description                                                                                               |
| ---------------- | -----------  | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| useRecPW         | Callback     | **NO**                     | Emits the generated password back to the parent component                                                 |


### NgxPwdOptions
| Options          | Type         | Required                   | Description                                                                                               |
| ---------------- | -----------  | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| length           | Number       | Defaults: 8                | Generated password length                                                                                 |
| color            | String       | Defaults: #18b4d7          | Background color of bullet when passed                                                                    |
| hideAfterUse     | Boolean      | Defaults: false            | Whether to hide generated password after used                                                             |


### Sample Usage

1) Register the `NgxPwdModule` in your app module.
 > `import { NgxPwdModule } from 'ngx-pwd'`

``` tyscript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxPwdModule } from 'ngx-pwd';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPwdModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

```
2) Declare the options on yout app.component.ts

``` typscript
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
    hideAfterUse: true
  };

  useRecPwd (pwd: string) {
    this.password = pwd;
  }
}

```
3) Use the component `<ngx-pwd></ngx-pwd>` in your component.

``` html
<div class="ngx-pwd-demo">
  <div class="ngx-pwd-demo-form">
    <p>NgxPwdModule Demo</p>

    <div class="ngx-pwd-demo-input">
      <input type="text" [(ngModel)]="password" placeholder="enter your password">
    </div>

    <div class="ngx-pwd-demo-component">
      <ngx-pwd [options]="options" [password]="password" [valid]="valid" (useRecPW)="useRecPwd($event)"></ngx-pwd>
    </div>
  </div>
</div>
```

###

Thanks to all resources