import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css',
})
export class NgIfComponent {
  isAvaliable: boolean = true;
  number1: string = '';
  number2: string = '';
  hideBtn() {
    this.isAvaliable = false;
  }
  showBtn() {
    this.isAvaliable = true;
  }
  product: any = {
    Name: 'Iphone 14',
    price: 89000,
    Image:
      'https://images.unsplash.com/photo-1624521793559-136bfe16fc86?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D',
  };

  preview:boolean=false;
}
