import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-com2',
  templateUrl: './com2.component.html',
  styleUrls: ['./com2.component.css']
})
export class Com2Component implements OnInit {

  @Input() count = 0;
  @Output() onReset = new EventEmitter<number>();
  constructor(private app: AppComponent) { }

  ngOnInit() {
  }
  onClickReset2() {
    this.onReset.emit(0);
  }
  onClickUpdate() {
    this.app.title = "Title com2";
  }

}
