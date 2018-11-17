import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort, MatTableDataSource } from "@angular/material";

const ELEMENTS_DATA = [
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: "Item A",
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 49.99,
    description: "Item B",
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 9.99,
    description: "Item C",
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 103,
    total: 59.99,
    description: "Item D",
    isChecked: false
  }
];

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.css"]
})
export class OrderListComponent implements OnInit {
  displayedColumns = [
    "action",
    "orderNumber",
    "orderDate",
    "description",
    "total"
  ];
  dataSource = new MatTableDataSource(ELEMENTS_DATA);
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit() {}
}
