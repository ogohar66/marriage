import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premium-user',
  templateUrl: './premium-user.component.html',
  styleUrls: ['./premium-user.component.scss']
})
export class PremiumUserComponent implements OnInit {
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
