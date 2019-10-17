import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule, TabsModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InboxComponent } from './Inbox/inbox.component';
import { ClassifiedsComponent } from './Classifieds/classifieds.component';
import { AdminComponent } from './Admin/admin.component';
import { MyClassifiedsComponent } from './MyClassifieds/myClassifieds.component';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
