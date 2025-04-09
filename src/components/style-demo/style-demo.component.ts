import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-style-demo',
  imports: [CommonModule, FormsModule],
  templateUrl: './style-demo.component.html',
  styleUrl: './style-demo.component.css',
})
export class StyleDemoComponent {
  public bgStyle: string = 'red';
  public textStyle: string = 'white';
  public padding: string = '1px';
  public fontStyle: string = '1px';
  styleObj: {
    'background-color': string;
    color: string;
    'font-size': string;
    padding: string;
  } = {
    'background-color': 'red',
    'color': 'white',
    'padding': this.padding + 'px',
    'font-size': this.fontStyle + 'px',
  };
  ApplyStyles() {
    this.styleObj = {
      'background-color': this.bgStyle,
      color: this.textStyle,
      'font-size': this.fontStyle + 'px',
      padding: this.padding + 'px',
    };
  }
}
