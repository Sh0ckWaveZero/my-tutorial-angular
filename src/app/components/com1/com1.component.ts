import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ShareService } from 'src/app/services/share.service';


@Component({
  selector: 'app-com1',
  templateUrl: './com1.component.html',
  styleUrls: ['./com1.component.css']
})
export class Com1Component implements OnInit {

  @Input("count_com1") count = 0;
  @Output() onReset = new EventEmitter<number>();
  constructor(private app: AppComponent, public share: ShareService) { }

  ngOnInit() {
  }
  onClickReset1() {
    this.onReset.emit(0);
  }
  onClickUpdateApp() {
    this.app.title = "Title com1";
  }

  onClickUpdateShareCount() {
    this.share.count = this.share.count + 1;
  }

}
