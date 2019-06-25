import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  constructor(public contactService: ContactService) {}
  contacts = [
    {
      id: 1,
      firstname: "oluwatobi",
      lastname: "ogundare",
      phone: "08131369861"
    },
    {
      id: 2,
      firstname: "taiwo",
      lastname: "adeyemi",
      phone: "07031810952"
    }
  ];

  getContacts() {
    return this.contacts;
  }

  addContact(data) {
    console.log(this);
    let topId =
      (this.contacts[this.contacts.length - 1]
        ? this.contacts[this.contacts.length - 1].id
        : 0) + 1;
    this.contacts.push({ id: topId, ...data });
  }

  updateContact(data) {
    this.contacts = [
      ...this.contacts.filter(e => e.id !== data.id),
      { ...data }
    ];
  }

  deleteContact = id => {
    this.contacts = [...this.contacts.filter(e => e.id !== id)];
    return this.contacts;
  };
}
