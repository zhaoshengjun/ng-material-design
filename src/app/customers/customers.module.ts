import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule, MatInput } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatRadioModule } from "@angular/material/radio";

import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerCardComponent } from "./customer-card/customer-card.component";
import { CustomerNewComponent } from "./customer-new/customer-new.component";
import { RepDialogComponent } from "./rep-dialog/rep-dialog.component";

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCardComponent,
    CustomerNewComponent,
    RepDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatRadioModule,
    CustomersRoutingModule
  ],
  entryComponents: [RepDialogComponent]
})
export class CustomersModule {}
