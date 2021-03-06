import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort, MatTableDataSource, PageEvent } from "@angular/material";

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
  },
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
  },
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
  dataSource: MatTableDataSource<object>;
  length = 100;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [1, 2, 5, 10];
  pageEvent: PageEvent;

  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  loadData(pageIndex: number, pageSize: number) {
    this.dataSource = new MatTableDataSource(
      ELEMENTS_DATA.slice(pageIndex, pageIndex + pageSize)
    );
  }
  ngOnInit() {
    this.loadData(0, this.pageSize);
    this.dataSource.sort = this.sort;
  }

  selectAll() {
    ELEMENTS_DATA.forEach(
      (element) => (element.isChecked = !element.isChecked)
    );
  }

  onPageChange(evt) {
    this.pageSize = evt.pageSize;
    this.pageIndex = evt.pageIndex;
    this.loadData(this.pageIndex, this.pageSize);
  }
}
