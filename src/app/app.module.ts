import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidateComponent } from './candidate/candidate.component';
import { BrowseJobsComponent } from './browse-jobs/browse-jobs.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';
import { BrowseCategoriesComponent } from './browse-categories/browse-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    BrowseJobsComponent,
    ManageJobsComponent,
    BrowseCategoriesComponent
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
