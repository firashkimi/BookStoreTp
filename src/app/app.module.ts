import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NouveautesComponent } from './nouveautes/nouveautes.component';
import { TopComponent } from './top/top.component';
import { FooterComponent } from './footer/footer.component';
import { LivredescriptionComponent } from './livredescription/livredescription.component';

@NgModule({
  declarations: [
    AppComponent,
    NouveautesComponent,
    TopComponent,
    FooterComponent,
    LivredescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
