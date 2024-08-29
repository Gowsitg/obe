import { Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { ProgramDataService } from 'src/app/shared/program-data.service';
import { MatExpansionPanel } from '@angular/material/expansion';
import { BehaviorSubject } from 'rxjs';
import { CoursedetailsComponent } from '../coursedetails/coursedetails.component';

@Component({
  selector: 'app-programoutcome',
  templateUrl: './programoutcome.component.html',
  styleUrls: ['./programoutcome.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ProgramoutcomeComponent implements OnInit{
  maincoursevalue: any;
  outData: any;
  org: any;
  private tablevalues = new BehaviorSubject<string>('');
  tableSub = this.tablevalues.asObservable();
  constructor(private maincourse: MainComponent,private dataservice:ProgramDataService) {  
  }
  @ViewChild(MatExpansionPanel) panel!: MatExpansionPanel;
  @Output() triggerFunction = new EventEmitter<any>();

  ngOnInit(): void {
    this.maincourse.castValues.subscribe(res=> {
      this.maincoursevalue = res;
    })
    // console.log(this.maincoursevalue);

    this.dataservice.expanValues().subscribe(values => {
        this.org = values;
    });   
    setTimeout(() => {
      this.panel.open();
      
    }, 300);
  }
  
    executeall() {
      this.dataservice.expanValues().subscribe(values => {
        this.org = values;
    });   
    setTimeout(() => {
      this.panel.open();
      
    }, 300);
    }

  executeAction( ) {
    this.maincourse.castValues.subscribe(res=> {
      this.maincoursevalue = res;
    });
    
    this.dataservice.expanValues().subscribe(values => {
      this.org = values;
    
    });   
    const filteredData: any[] = [];

    this.org.forEach((item: any) => {
      if(item.title == this.maincoursevalue) {
        const buyerDataWithStatus = item;

      filteredData.push(buyerDataWithStatus);

      }

    })
  this.org = filteredData;
  
  setTimeout(() => {
    this.panel.open();
  }, 300);
  }


  onPanelOpened(value: any) {
    this.triggerFunction.emit(value);
  }

 
}
