import { NgModule } from '@angular/core';
import { NgxPwdComponent } from './ngx-pwd.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NgxPwdComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxPwdComponent]
})
export class NgxPwdModule { }
