import { NgFor, NgForOf, NgForOfContext } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  imports: [NgFor],
  templateUrl: './for-directive.component.html',
  styleUrl: './for-directive.component.css',
})
export class ForDirectiveComponent {
  public courses = ['c#.Net', 'ASP.Net Core', 'Angular', 'ReactJS'];
  public productsList = [
    {
      category: 'Electronics',
      products: ['Tv', 'Mobile', 'Laptop'],
    },
    { category: 'MensFashion', products: ['Teashirts', 'shirts', 'Joggers'] },
    {category:'Footware',products:['Nike','puma','crocs']},
  ];

  public employee=[{"empId":101,"empName":"srikanth","empsalary":1234},
    {"empId":102,"empName":"smith","empsalary":4578},
    {"empId":103,"empName":"sam","empsalary":838},

  ]
}
