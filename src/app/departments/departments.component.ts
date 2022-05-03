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

  // creating an instance of it through dependency injection within the constructor() function.
  constructor(private deptservice: DeptserviceService) { }

  // Then we call the method with this.deptservice.getDepts() to get the difft department.
  ngOnInit(): void {
    this.deptArray = this.deptservice.getDepts()
  }

  view(data : details ) {
    this.myData = data.departments
    this.isDisplay = true
  }
}
