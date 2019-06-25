import { Component, OnInit } from "@angular/core";
import { Contact } from "../Interfaces/Contact/contact";
import { ContactService } from "../services/contact/contact.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent implements OnInit {
  state;

  public type = "Add";

  formModel = new Contact(null, "", "", "");
  constructor(
    public contactService: ContactService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}
  onSubmit() {
    if (this.type == "Add") {
      this.contactService.addContact(this.formModel);
      this.router.navigateByUrl("/contacts");
    } else {
      this.contactService.updateContact(this.formModel);
      this.router.navigateByUrl("/contacts");
    }
  }

  ngOnInit() {
    if (this.router.url == "/edit") {
      this.state = history.state;
      if (history.state.contact) {
        const { id, firstname, lastname, phone } = this.state.contact;
        this.type = "Edit";
        this.formModel = new Contact(id, firstname, lastname, phone);
      } else {
        this.router.navigateByUrl("/contacts");
      }
    }
  }
}
