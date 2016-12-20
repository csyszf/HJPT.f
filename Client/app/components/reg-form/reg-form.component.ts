import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { SignUpReq } from 'app-models';
@Component({
  selector: 'reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit {

  @Input() form: SignUpReq;
  @Input() isBusy: boolean;
  @Output() submit = new EventEmitter();
  @Output() toggle = new EventEmitter();

  constructor(
    private router: Router,
  ) { }
  toLogin() {
    this.router.navigate(['auth/login']);
  }
  ngOnInit() {

  }

}