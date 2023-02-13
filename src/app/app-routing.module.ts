import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { GuidComponent } from './guid/guid.component';

const routes: Routes = [
  {path:"",redirectTo:"form",pathMatch:"full"},
  {path:"guid",component:GuidComponent},
  {path:"form",component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
