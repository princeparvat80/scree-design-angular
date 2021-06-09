import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { EmployerComponent } from './employer/employer.component';
import { ProfilesettingComponent } from './profilesetting/profilesetting.component';
import { CandidateComponent } from './candidate/candidate.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactSectionComponent,
    EmployerComponent,
    ProfilesettingComponent,
    CandidateComponent,
    ManageJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
