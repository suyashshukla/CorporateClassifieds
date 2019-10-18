import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { InboxComponent } from './Inbox/Dashboard/inbox.component';
import { ClassifiedsComponent } from './Classifieds/Dashboard/classifieds.component';
import { AdminComponent } from './Admin/Dashboard/admin.component';
import { MyClassifiedsComponent } from './MyClassifieds/Dashboard/myClassifieds.component';

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
