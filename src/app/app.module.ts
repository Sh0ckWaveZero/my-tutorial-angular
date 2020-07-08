import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Com1Component } from './components/com1/com1.component';
import { Com2Component } from './components/com2/com2.component';
import { ShareService } from './services/share.service';
import { ErrorCodePipePipe } from './error-code-pipe.pipe';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { Child3Component } from './components/child3/child3.component';
import { Child4Component } from './components/child4/child4.component';
import { Child5Component } from './components/child5/child5.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    Com1Component,
    Com2Component,
    ErrorCodePipePipe,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
