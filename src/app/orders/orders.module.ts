import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material/tabs";

import { OrdersRoutingModule } from "./orders-routing.module";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderNewComponent } from "./order-new/order-new.component";

@NgModule({
  declarations: [OrderListComponent, OrderNewComponent],
  imports: [CommonModule, MatTabsModule, OrdersRoutingModule]
})
export class OrdersModule {}
