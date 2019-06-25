import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactComponent } from "./contact/contact.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ContactFormComponent } from "./contact-form/contact-form.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent,
    ContactFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
