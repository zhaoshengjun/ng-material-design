import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";

@Component({
  selector: "app-message-new",
  templateUrl: "./message-new.component.html",
  styleUrls: ["./message-new.component.css"]
})
export class MessageNewComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  priorities: string[] = ["High", "Medium", "Low"];
  departments: object[] = [
    { id: 1, name: "Compliants" },
    { id: 2, name: "Loyalty" },
    { id: 3, name: "Promotions" }
  ];

  constructor(private formBuild: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuild.group({
      emailCtrl: ["", Validators.required],
      priorityCtrl: ["", Validators.required],
      departmentCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this.formBuild.group({
      messageCtrl: ["", Validators.required]
    });
  }

  getDepartmentName(department: object) {
    return department ? department["name"] : undefined;
  }
}
