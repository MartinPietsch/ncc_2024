import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RunsComponent } from './components/runs/runs.component';

const routes: Routes = [
  { path: 'runs', component: RunsComponent },
  // other routes can be added here
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
