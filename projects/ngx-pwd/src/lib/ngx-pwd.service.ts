import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxPwdService {
  rules = [
    { key: 'length', message: 'Minimum of 8 characters', valid: false },
    { key: 'digits', message: 'Must have at least 1 numeric value', valid: false },
    { key: 'lower', message: 'Must have at least 1 lowercase alphabet', valid: false },
    { key: 'upper', message: 'Must have at least 1 uppercase alphabet', valid: false },
    { key: 'nonWords', message: 'Must have at least 1 special character', valid: false }
  ];

  constructor() { }

  generate(length?: number) {
    const ceil = (n) => Math.ceil(n * Math.random() * Math.random());
    const charset  = [
      'abcdefghijklmnopqrstuvwxyz',
      '0123456789',
      '!@#$%^&*()_+~`|}{[]\:;?><,./-='
    ];

    let password = '';
    while (password.length < (length || 8)) {
      charset.forEach(set => password += set[ceil(set.length)]);
      password += String.fromCharCode(65 + ceil(26)); // uppercase
    }

    return password;
  }

  validate(password: string) {
    const rules = {
      length: password && password.length >= 8,
      digits: /\d/.test(password),
      lower: /[a-z]/.test(password),
      upper: /[A-Z]/.test(password),
      nonWords: /\W/.test(password),
    };

    this.rules.forEach(rule => rule.valid = rules[rule.key]);
    return this.rules.filter(a => !a.valid).length === 0;
  }
}
