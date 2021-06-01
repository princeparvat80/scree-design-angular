import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerComponent } from './employer/employer.component';
import { CandidateComponent } from './candidate/candidate.component';

const routes: Routes = [
  {path:'employer',component:EmployerComponent},
  {path:'candidate',component:CandidateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
