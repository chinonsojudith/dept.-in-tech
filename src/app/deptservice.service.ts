import { Injectable } from '@angular/core';
import { details } from '../app/interface'

@Injectable({
  providedIn: 'root'
})
export class DeptserviceService {

  constructor() { }

  getDepts () : details [] {
    return [
      {
        id : 1,
        name: "CyberSecurity",
        departments : [
          {
            id: 1,
            course : "Hacking 101"
          },
          {
            id: 2,
            course : "ComptiA ++"
          }
        ]
      },
      {
        id : 2,
        name: "Software Development",
        departments : [
          {
            id: 2,
            course : "Frontend"
          },
          {
            id: 2,
            course : "Backend"
          }
        ]
      },
      {
        id : 3,
        name: "UI/UX Design",
        departments : [
          {
            id: 1,
            course : "Figma"
          },
          {
            id: 2,
            course : "Adobe XD"
          }
        ]
      },
      {
        id : 4,
        name: "Telecommunication",
        departments : [
          {
            id: 1,
            course : "Networking"
          },
          {
            id: 2,
            course : "ComptiA+"
          }
        ]
      }
    ]
  }
}
