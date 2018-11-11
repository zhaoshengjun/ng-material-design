import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatStepperModule } from "@angular/material/stepper";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

import { MessagesRoutingModule } from "./messages-routing.module";
import { MessageListComponent } from "./message-list/message-list.component";
import { MessageNewComponent } from "./message-new/message-new.component";

@NgModule({
  declarations: [MessageListComponent, MessageNewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatAutocompleteModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule {}
