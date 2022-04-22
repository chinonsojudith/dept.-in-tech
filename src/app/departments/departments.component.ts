import { Component, OnInit } from '@angular/core';
import { details } from '../interface';
import { DeptserviceService } from '../deptservice.service'
import { dept } from '../interface'

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  deptArray : details[] = []

  myData! : any
  isDisplay : boolean = false

  constructor(private deptservice: DeptserviceService) { }

  ngOnInit(): void {
    this.deptArray = this.deptservice.getDepts()
  }

  view(data : details ) {
    this.myData = data.departments
    this.isDisplay = true
  }
}
