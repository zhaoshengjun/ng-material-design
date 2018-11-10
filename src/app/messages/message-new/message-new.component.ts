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
  constructor(private formBuild: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuild.group({
      emailCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this.formBuild.group({
      messageCtrl: ["", Validators.required]
    });
  }
}
