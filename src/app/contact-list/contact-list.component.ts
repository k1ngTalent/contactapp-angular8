import { Component, OnInit, DoCheck } from "@angular/core";
import { ContactService } from "../services/contact/contact.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"]
})
export class ContactListComponent implements OnInit {
  public contacts;
  public deleteContact;

  constructor(public contactService: ContactService, public router: Router) {}

  public updateContact = contact => {
    this.router.navigateByUrl("/edit", { state: { contact } });
  };

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.deleteContact = this.contactService.deleteContact;
  }

  ngDoCheck() {
    this.contacts = this.contactService.getContacts();
  }
}
