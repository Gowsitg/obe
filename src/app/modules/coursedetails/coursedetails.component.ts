import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Chart } from 'angular-highcharts';
import { delay } from 'rxjs/operators';

interface programrecord {
  code: string;
  name: string;
  attainment: number;
  status: number;
  img: string;
}

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.scss']
})
export class CoursedetailsComponent implements OnInit{
  res: any;
  completed: any;
  pending: any;
  prog: any;
  courseCode: any;
  barValue: any;
  name: any;
  sem: any;
  Practical: any;
  Lecture: any;
  Tutorial: any;
  Project: any;
  cos: any;
  linechart: any;
  type: any;
  cred: any;
  cosvalue:any;
  displayedColumns: string[] = ['code', 'name', 'type', 'sem','credit','outcome','evaluation','obe'];
  dataSource = new MatTableDataSource( );
  maincoursevalue: any;
  evaluation: any;
  mark: any;
  attendance: any;
  tables: boolean = false;
  chart: any;
  studend: any;
  pie: any;
  course: boolean = true;
  ngOnInit(): void {
    

  
  }

  excuteValue(value: any){

    const req = value;
     this.res = req.title;
    this.dataSource = new MatTableDataSource(req.courseDetails);

  }

  barchart(value: any) {
    this.tables = true;
    this.barValue = value;
    this.courseCode = this.barValue.courseCode;
    this.name = this.barValue.courseName;
    this.type= this.barValue.type;
    this.sem = this.barValue.sem;
    this.Lecture = this.barValue.credit.Lecture;
    this.Practical = this.barValue.credit.Practical;
    this.Project = this.barValue.credit.Project;
    this.Tutorial = this.barValue.credit.Tutorial;
    this.courseCode = this.barValue.courseCode;
    this.cos = this.barValue.co;
    this.evaluation = this.barValue.map.split(',');
    this.prog = this.barValue.evaluationReport[0].progress;
    this.completed = [this.prog.assessment.complete,this.prog.quiz.complete,this.prog.presentation.complete,this.prog.lab.complete,this.prog.viva.complete]
    this.pending = [this.prog.assessment.pending,this.prog.quiz.pending,this.prog.presentation.pending,this.prog.lab.pending,this.prog.viva.pending]
    this.attendance = this.barValue.evaluationReport[0].attendance;
    this.mark = this.barValue.evaluationReport[0].mark;
    const student = this.barValue.evaluationReport[0].totalStudent;
    this.studend = student.good + student.excellent + student.middle;
    console.log(this.studend)
     this.chart = new Chart({
      chart: {
        type: 'column' 
      },
      title: {
        text: 'Assessment Progress', 
        align: 'left',
      },
      credits: {
        enabled: false
      },
      colors: ['#A7C88F', '#C6C6C6'],
      xAxis: {
        categories: ['Assignment','Quiz', 'Presentation', 'Lab', 'Viva'], 
        gridLineWidth: 0, 
        lineWidth: 0
      },
      yAxis: {
        tickAmount: 5, 
        tickPositions: [0, 25, 50, 75, 100],
        labels: {
          formatter: function () {
            return this.value + '%';
          }
        },
        gridLineWidth: 1, 
        lineWidth: 1
      },
      legend: {
        align: 'center', 
        verticalAlign: 'top', 
        layout: 'horizontal' ,
       
      },
      plotOptions: {
        column: {
          pointWidth: 20,
          pointPadding: 0.1, 
          groupPadding: 0.1 
        }
      },
      series: [
        {
          type: 'column',
          name: 'Pending',
          data: this.pending,
        },
        {
          type: 'column',
          name: 'Complete',
          data: this.completed,
        },
        
        
      ]
    });

    this.linechart = new Chart({
      chart: {
        type: 'line' 
      },
      title: {
        text: 'Student Attendance', 
        align: 'left',
      },
      credits: {
        enabled: false
      },
      colors: ['#A7C88F', '#C6C6C6'],
      xAxis: {
        categories: ['1/7', '8/7', '15/7', '22/7', '29/7'], // Categories for week ranges
        title: {
          text: 'Weeks'
        },
        gridLineWidth: 1, 
        lineWidth: 1
      },
      yAxis: {
        tickAmount: 5, 
        tickPositions: [0, 25, 50, 75, 100],
        labels: {
          formatter: function () {
            return this.value + '%';
          }
        },
        gridLineWidth: 0, 
  
      },
      legend: {
        align: 'center', 
        verticalAlign: 'top', 
        layout: 'horizontal' ,
       
      },
      plotOptions: {
        column: {
          pointWidth: 20,
          pointPadding: 0.1, 
          groupPadding: 0.1 
        }
      },
      series: [
        {
          type: 'line',
          name: 'Pending',
          data: this.attendance ,
        },
      ]
    });
     

     this.pie = new Chart({
      chart: {
        type: 'pie' 
      },
      title: {
        text: 'OverAll Course Outcome Attainment', 
        align: 'left',
      },
      credits: {
        enabled: false
      },
      colors: ['#A7C88F', '#C6C6C6'],
      xAxis: {
        categories: ['1/7', '8/7', '15/7', '22/7', '29/7'], // Categories for week ranges
        title: {
          text: 'Weeks'
        },
        gridLineWidth: 1, 
        lineWidth: 1
      },
      yAxis: {
        tickAmount: 5, 
        tickPositions: [0, 25, 50, 75, 100],
        labels: {
          formatter: function () {
            return this.value + '%';
          }
        },
        gridLineWidth: 0, 
  
      },
      legend: {
        align: 'center', 
        verticalAlign: 'top', 
        layout: 'horizontal' ,
       
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
                color: 'white'
              }
            },
            startAngle: -90,
            endAngle: -180,
            center: ['50%', '50%'],
            size: '90%',
            showInLegend: true
          },
        column: {
          pointWidth: 20,
          pointPadding: 0.1, 
          groupPadding: 0.1 
        }
      },
      series: [
        {
          type: 'pie',
          name: 'Pending',
          data: this.attendance ,
        },
      ],
    });
     }

     back() {
      this.tables = false;
     }
    
     courseTab() {
      // this.course = !this.course;
      // this.barchart(this.barValue);

     }
  
}



