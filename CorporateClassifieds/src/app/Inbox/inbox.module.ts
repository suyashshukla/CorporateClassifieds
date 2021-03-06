import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent, InboxDataComponent } from './';
import { InboxRoutingModule } from './inbox-routing.module';

@NgModule({
  imports: [CommonModule, InboxRoutingModule],
  declarations: [InboxComponent, InboxDataComponent],
  bootstrap: [InboxComponent]
})

export class InboxModule { }
