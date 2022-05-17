import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  activeUsers=[
    {
      name:'أمة الله',
      age:30,
      country:'مصر',
      city:'الأسكندرية',
    },
    {
      name:'أمة الله',
      age:30,
      country:'مصر',
      city:'الأسكندرية',
    },
    {
      name:'أمة الله',
      age:30,
      country:'مصر',
      city:'الأسكندرية',
    },
    {
      name:'أمة الله',
      age:30,
      country:'مصر',
      city:'الأسكندرية',
    },
    {
      name:'أمة الله',
      age:30,
      country:'مصر',
      city:'الأسكندرية',
    },
    {
      name:'أمة الله',
      age:30,
      country:'مصر',
      city:'الأسكندرية',
    },
    {
      name:'أمة الله',
      age:30,
      country:'مصر',
      city:'الأسكندرية',
    },
  ]
  constructor() { }
 
  ngOnInit(): void {
  }

}
