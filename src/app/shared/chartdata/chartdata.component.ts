import { Component, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chartdata',
  templateUrl: './chartdata.component.html',
  styleUrls: ['./chartdata.component.scss']
})
export class ChartdataComponent {
  @Input() childData : any;
 
}
