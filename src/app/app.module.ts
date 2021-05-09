import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentComponent } from './components/agent/agent.component';
import { ManagementComponent } from './components/management/management.component';
import { FormsModule } from '@angular/forms';
import { BuyCardComponent } from './components/buy-card/buy-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AgentComponent,
    ManagementComponent,
    BuyCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
