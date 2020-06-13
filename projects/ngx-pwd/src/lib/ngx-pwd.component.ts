import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxPwdService } from './ngx-pwd.service';

export interface NgxPwdOptions {
  length?: 8;
  color?: string;
  hideAfterUse?: false;
}

@Component({
  selector: 'ngx-pwd',
  template: `
    <div class="ngx-pwd">
      <div class="ngx-pwd-recommended" *ngIf="!recPwd.used && options.hideAfterUse || !options.hideAfterUse" (click)="usePassword()">
        <a href="javascript:;">
          <small class="text-uppercase">Click to use suggested password:</small>
        </a>
        <span [textContent]="recPwd.value"></span>
      </div>

      <div *ngFor="let rule of rules">
        <span class="ngx-pwd-bullet" [style.backgroundColor]="rule['valid'] ? (options?.color || '#18b4d7') : '#ccc'"></span>
        <small>{{ rule.message }}</small>
      </div>
    </div>
  `,
  styleUrls: ['./ngx-pwd.component.scss']
})
export class NgxPwdComponent implements OnInit, OnChanges {
  @Input() options?: NgxPwdOptions;
  @Input() valid?: Subject<boolean> = new Subject();
  @Input() password: string;
  @Output() useRecPW = new EventEmitter();

  recPwd = {
    value: '',
    used: false
  };

  rules = this.ngxPwdService.rules;

  constructor(
    private ngxPwdService: NgxPwdService
  ) { }

  ngOnInit() {
    this.recPwd.value = this.ngxPwdService.generate(this.options.length);
  }

  ngOnChanges() {
    const valid = this.ngxPwdService.validate(this.password);
    if (this.valid) {
      this.valid.next(valid);
    }
  }

  usePassword() {
    this.useRecPW.emit(this.recPwd.value);
    this.recPwd.used = true;
  }
}
