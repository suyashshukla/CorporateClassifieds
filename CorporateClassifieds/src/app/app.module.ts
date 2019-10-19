import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InboxComponent } from './Inbox';
import { ClassifiedsComponent } from './Classifieds';
import { AdminComponent } from './Admin';
import { MyClassifiedsComponent } from './MyClassifieds';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    ClassifiedsComponent,
    AdminComponent,
    MyClassifiedsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
