import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.css"]
})
export class OrderListComponent implements OnInit {
  content: string;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.content = "lazy loaded content";
    }, 2000);
  }
}
