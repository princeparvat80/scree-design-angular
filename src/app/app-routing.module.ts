import { ProfilesettingComponent } from './profilesetting/profilesetting.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { EmployerComponent } from './employer/employer.component';
import { CandidateComponent } from './candidate/candidate.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';


const routes: Routes = [
  {path:'employer',component:EmployerComponent},
  {path:'Contact',component:ContactSectionComponent},
  {path:'profilesetting',component:ProfilesettingComponent},
  {path:'candidate',component:CandidateComponent},
  {path:'manage',component:ManageJobsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
