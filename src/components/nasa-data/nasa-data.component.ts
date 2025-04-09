import { CommonModule, NgIf } from '@angular/common';
import { HttpClient, httpResource } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nasa-data',
  imports: [NgIf],
  templateUrl: './nasa-data.component.html',
  styleUrl: './nasa-data.component.css',
})
export class NasaDataComponent {
  marsObject: any = [];
    
    ngOnInit(){
    fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.marsObject = data.photos;
      });
    }
}
