import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from 'angular-highcharts';
import { BehaviorSubject } from 'rxjs';
import { Course } from 'src/app/shared/model';
import { ProgramDataService } from 'src/app/shared/program-data.service';

@Component({
  selector: 'app-courseoverview',
  templateUrl: './courseoverview.component.html',
  styleUrls: ['./courseoverview.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CourseoverviewComponent implements OnInit {
  displayedColumns: string[] = ['code', 'name', 'attainment', 'status'];
  dataSource = new MatTableDataSource<any>();

  courses: Course[] = [];
  courseId: string | undefined;
  selectsection: any = 1;
  datas: any;
  datasfilt: any;
  finaldata: any;
  Tabledatas: any;
  batchdata: any;
  pie: any;
  private user = new BehaviorSubject<string>('');
  castUser = this.user.asObservable();

  constructor(
    private dataservice: ProgramDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.courseId = params.get('id')!;
    });
    this.dataservice.getCourses().subscribe((data) => {
      this.datas = data;
      const user = this.datas.find((x: any) => x.code == this.courseId)
      // this.datas.forEach((item: any) => {
      //   // console.log(item.code)
      //   this.datasfilt = item;
        
      //   if (this.datasfilt.code == this.courseId) {
          this.finaldata = user;
          user.batch.forEach((data: any) => {
            this.batchdata = data;
          });
      //   }

      // });
      console.log(user)
    });

    this.dataSource = new MatTableDataSource(this.batchdata.tabledata);
    // console.log(this.finaldata.batch);
    this.user.next(this.batchdata);

    if (this.finaldata.batch.length > 1) {
      this.displayedColumns = ['code', 'name', 'status'];
    }

    this.pie = new Chart({
      chart: {
        type: 'pie',
      },
      title: {
        text: 'OverAll Course Outcome Attainment',
        align: 'left',
      },
      credits: {
        enabled: false,
      },
      colors: ['#A7C88F', '#C6C6C6'],
      xAxis: {
        title: {
          text: 'Weeks',
        },
        gridLineWidth: 1,
        lineWidth: 1,
      },
      yAxis: {
        tickAmount: 5,
        tickPositions: [0, 25, 50, 75, 100],
        labels: {
          formatter: function () {
            return this.value + '%';
          },
        },
        gridLineWidth: 0,
      },
      legend: {
        align: 'center',
        verticalAlign: 'top',
        layout: 'horizontal',
        enabled: false,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white',
            },
          },
          startAngle: -90,
          endAngle: -180,
          center: ['50%', '50%'],
          size: '90%',
          showInLegend: true,
        },
        column: {
          pointWidth: 20,
          pointPadding: 0.1,
          groupPadding: 0.1,
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Pending',
          data: [20, 30, 25],
        },
      ],
    });
  }

  navi() {
    this.router.navigate(['/modules/program']);
  }

  main(id: any) {
    this.router.navigate(['/modules/main' + '/' + id]);
  }
}
