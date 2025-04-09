import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-class-demo',
  imports: [FormsModule,CommonModule],
  templateUrl: './class-demo.component.html',
  styleUrl: './class-demo.component.css'
})
export class ClassDemoComponent {
 background:boolean=false
}
