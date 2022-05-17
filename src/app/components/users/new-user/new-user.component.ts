import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
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
