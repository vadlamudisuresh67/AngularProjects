import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StudentResultComponent } from '../../student-result/student-result.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterOutlet,RouterLink,],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
