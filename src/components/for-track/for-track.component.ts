import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-track',
  imports: [CommonModule],
  templateUrl: './for-track.component.html',
  styleUrl: './for-track.component.css',
})
export class ForTrackComponent {
  emps: any[] = [
    { empId: 101, empName: 'Suresh', salary: 12000 },
    { empId: 102, empName: 'sam', salary: 13000 },
    { empId: 103, empName: 'rim', salary: 14000 },
  ];
  GetUpdatedData() {
    this.emps = [
      { empId: 101, empName: 'Suresh', salary: 12000 },
      { empId: 102, empName: 'sam', salary: 13000 },
      { empId: 103, empName: 'rim', salary: 14000 },
      { empId: 104, empName: 'rink', salary: 15000 },
    ];
  }
    TrackChanges(index:number){
      return index;
    }
  
}
