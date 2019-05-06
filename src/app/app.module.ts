import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OppCardComponent } from './opp-card/opp-card.component';
import { ModalComponent } from './opp-card/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  entryComponents: [
    ModalComponent,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
