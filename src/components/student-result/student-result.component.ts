import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-result',
  imports: [FormsModule],
  templateUrl: './student-result.component.html',
  styleUrl: './student-result.component.css',
})
export class StudentResultComponent {
  stdName: string = 'suresh';
  stdId: number = 101;
  sub1: number = 67;
  sub2: number = 78;
  sub3: number = 89;
  marks: number = this.sub1 + this.sub2 + this.sub3;
  avg: number = this.marks / 3;
  result: string =this.calResult(this.avg);

  calculation() {
    this.marks = Number(this.sub1) + Number(this.sub2) + Number(this.sub3);
    this.avg = (this.marks / 3);
    this.result = this.calResult(this.avg);
  }

  calResult(avg: number): string {
    if (avg > 35) {
      return 'pass';
    } else {
      return 'fail';
    }
  }
}
