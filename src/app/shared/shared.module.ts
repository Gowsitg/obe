import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../materils.module';
import { MenuItems } from './menuitems.component';
import { ProgramDataService } from './program-data.service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartModule } from 'angular-highcharts';
import { ChartdataComponent } from './chartdata/chartdata.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    LayoutComponent,
    ChartdataComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    MaterialModule,
    NgCircleProgressModule.forRoot({}) // Import the module

  ],
  providers: [MenuItems,ProgramDataService],
 exports:[MaterialModule,ChartdataComponent]
})
export class SharedModule { }
