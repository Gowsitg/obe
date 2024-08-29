import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface programrecord {
  code: string;
  name: string;
  attainment: number;
  status: number;
  img: string;
}


@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ProgramComponent implements OnInit {

   statsdata: programrecord[] = [
    {code:'MV012H',name:'Masters in Business Administration', attainment:70,status: 1,img: 'mba.png'},
    {code:'MV013I',name:'Masters in Science - Software Engineering', attainment:50,status: 1,img: 'second.png'},
    {code:'MV012M',name:'Bachelor of Computer Application', attainment:90,status: 1,img: 'third.png'},
    {code:'MV0134S',name:'Bachelor of Engineering (Civil)', attainment:33,status: 1,img: 'fifth.png'},
    {code:'MV0133R',name:'Masters in Computer Application', attainment:54,status: 1,img: 'fourth.png'}, 
    {code:'MV013N',name:'Diploma in Computer Science', attainment:0,status: 2,img: 'last.png'}, 
  ]
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize!: MatPaginator;
  displayedColumns: string[] = ['code', 'name', 'attainment', 'status'];
  dataSource = new MatTableDataSource(this.statsdata);
  resultlength: any;
// determinate: ProgressSpinnerMode;
  selectsection: any = 2;
  constructor(private router:Router){}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  courseview(id: any) {
    this.router.navigate(['/modules/overview'+'/'+id]);
  }
  sectionChange(event: any): void {
    this.selectsection = event.value;
  }
}
