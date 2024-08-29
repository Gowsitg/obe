import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramComponent } from './program/program.component';
import { CourseoverviewComponent } from './courseoverview/courseoverview.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'program',
    component: ProgramComponent,
  },
  {
    path: 'overview/:id',
    component: CourseoverviewComponent,
  } ,
  {
    path: 'main/:id',
    component: MainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
