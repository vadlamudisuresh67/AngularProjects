import { Component } from '@angular/core';
import { Products } from '../fakestorecontract';
import { CommonModule, NgClass, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-for-properties',
  imports: [CommonModule,NgClass,NgStyle],
  templateUrl: './for-properties.component.html',
  styleUrl: './for-properties.component.css'
})
export class ForPropertiesComponent {
  public products:Products[]=[];
  constructor(){
  }
  //It will execute when the component is called (Life Cycle Hook)
  ngOnInit(){
    fetch('https://fakestoreapi.com/products')
    .then(response =>response.json())
    .then(data=>{
      this.products=data;
    })
  }
}
