import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";

const routes: Routes = [
  { path: "", redirectTo: "/contacts", pathMatch: "full" },
  { path: "contacts", component: ContactListComponent },
  { path: "add", component: ContactFormComponent },
  { path: "edit", component: ContactFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
