import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyClassifiedsModule } from './MyClassifieds/myclassified.module';
import { AdminModule } from './Admin/admin.module';
import { InboxModule } from './Inbox/inbox.module';
import { ClassifiedsModule } from './Classifieds/classifieds.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MyClassifiedsModule,
    AdminModule,
    InboxModule,
    ClassifiedsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
