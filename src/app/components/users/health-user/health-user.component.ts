import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-user',
  templateUrl: './health-user.component.html',
  styleUrls: ['./health-user.component.scss']
})
export class HealthUserComponent implements OnInit {
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
