import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ProgramComponent } from './program/program.component';
import { MaterialModule } from '../materils.module';
import { CourseoverviewComponent } from './courseoverview/courseoverview.component';
import { SharedModule } from '../shared/shared.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MainComponent } from './main/main.component';
import { ProgramoutcomeComponent } from './programoutcome/programoutcome.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  declarations: [
    ProgramComponent,
    CourseoverviewComponent,
    MainComponent,
    ProgramoutcomeComponent,
    CoursedetailsComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    ModulesRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    MatButtonToggleModule,
    NgCircleProgressModule.forRoot({}) // Import the module

  ],  
  providers: [ProgramoutcomeComponent],

})
export class ModulesModule { }
