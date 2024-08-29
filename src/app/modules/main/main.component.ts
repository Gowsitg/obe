import { Component, OnDestroy, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Course } from 'src/app/shared/model';
import { ProgramDataService } from 'src/app/shared/program-data.service';
import { CourseDetails } from './../../shared/model';
import { ProgramoutcomeComponent } from '../programoutcome/programoutcome.component';
import { CoursedetailsComponent } from '../coursedetails/coursedetails.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class MainComponent implements OnInit {
  @ViewChild(ProgramoutcomeComponent) programoutcomponent!: ProgramoutcomeComponent;

  courses: Course[] = [];
  courseId: string | undefined;
  selectsection: any = 1;
  datas: any;
  finaldata: any;
  Tabledatas: any;
  batchdata: any;
  outData: any;
  thirdData: any;
  years: any = 1;
  private outComeValues = new BehaviorSubject<string>('');
  castValues = this.outComeValues.asObservable();
  @ViewChild(CoursedetailsComponent) coursedetails!: CoursedetailsComponent;

  constructor(private dataservice: ProgramDataService,private route: ActivatedRoute,private router:Router) { }


   ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('id')!;
    });
    this.dataservice.getCourses().subscribe(data => {
      // data.forEach((item: any) => {
      //   this.datas = item;
      // })
      const user = data.find((x: any) => x.code == this.courseId);
      this.finaldata = user;
    });
    
    this.dataservice.getoutcome().subscribe(values => {
      const user = values.find((x: any) => x.programcode == this.courseId);
      this.thirdData = user;
      // values.forEach((item: any) => {
      //   this.outData = item;
      // })
    });

   

    // if(this.datas.code == this.courseId) {
    //      this.finaldata = this.datas;
    // }
    // if(this.outData.programcode == this.courseId) {
    //      this.thirdData = this.outData;
    // }
    this.outComeValues.next(this.thirdData.coursecode)

    // console.log(this.thirdData)
   }

   navi(type: number) {
    if(type == 1) {
      this.router.navigate(['/modules/program']);
    } else {
      this.router.navigate(['/modules/overview'+'/'+this.courseId]);
    }
   }

   onToggleChange(event: any) {
    this.programoutcomponent.executeall()
  }

  onToggleClick(item: any) {
    this.outComeValues.next(item.title);
    this.programoutcomponent.executeAction()
  }

  parentFunction(value: any) {
   this.coursedetails.excuteValue(value)
  }

}
