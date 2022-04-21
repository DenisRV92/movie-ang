import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentItemComponent} from "./content-item/content-item.component";
import {ContentComponent} from "./content/content.component";

const routes: Routes = [
  { path: 'movie', component: ContentItemComponent },
  { path: 'navigation', component: ContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
