import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyClassifiedsModule } from './MyClassifieds/myclassified.module';
import { AdminModule } from './Admin/admin.module';
import { InboxModule } from './Inbox/inbox.module';
import { ClassifiedsModule } from './Classifieds/classifieds.module';
import { LoginComponent } from './login/login.component';
import { AppService } from './Shared/AppService';

import {} from './Models';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
