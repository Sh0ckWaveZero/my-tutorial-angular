import { Component, ViewChild } from '@angular/core';
import { Com1Component } from './components/com1/com1.component';
import { Com2Component } from './components/com2/com2.component';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-tutorial';
  count = 0;
  errorCode = '001';

  constructor(private router: Router) {

  }

  @ViewChild('com1', { static: false }) com1: Com1Component;
  @ViewChild('com2', { static: false }) com2: Com2Component;

  onClickCount() {
    this.count = this.count + 1;
  }
  onCom1Reset(value) {
    this.count = value;
  }
  onClickRun3() {
    this.com1.count = 99;
    this.com2.count = 11;
  }
  onClickChild1() {
    this.router.navigate(['/child1']);
  }
  onClickChild2() {
    this.router.navigate(['/child2']);
  }
  onClickChild3() {
    this.router.navigate(['/child3']);
  }
}
