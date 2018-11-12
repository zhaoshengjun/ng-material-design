import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatMomentDateModule } from "@angular/material-moment-adapter";

import { OrdersRoutingModule } from "./orders-routing.module";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderNewComponent } from "./order-new/order-new.component";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [OrderListComponent, OrderNewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTabsModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule {}
