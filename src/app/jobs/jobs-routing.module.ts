import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoblistComponent } from './joblist/joblist.component';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';

const routes: Routes = [{
  path: '',
  component: JoblistComponent,
  pathMatch: 'full'
}, {
  path: 'joblist',
  component: JoblistComponent
}, {
  path: 'jobdetails/:id',
  component: JobdetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
