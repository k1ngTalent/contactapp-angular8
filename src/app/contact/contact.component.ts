import { Component, OnInit, Input } from "@angular/core";

import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  @Input() contact;
  @Input() deleteContact;
  @Input() updateContact;

  public faEdit = faEdit;
  public faTrash = faTrash;
  constructor() {}

  ngOnInit() {}
}
