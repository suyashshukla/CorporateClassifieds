import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './';
import { InboxRoutingModule } from './inbox-routing.module';

@NgModule({
  imports: [CommonModule, InboxRoutingModule],
  declarations: [InboxComponent],
  bootstrap: [InboxComponent]
})

export class InboxModule { }
