import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../components/web-app/nav-bar/nav-bar.component';
import { RegisterComponent } from '../components/web-app/register/register.component';
import { StudentResultComponent } from '../components/student-result/student-result.component';
import { NgIfComponent } from '../components/ng-if/ng-if.component';
import { LoginComponent } from '../components/web-app/login/login.component';
import { SwitchDirectiveComponent } from '../components/switch-directive/switch-directive.component';
import { ForDirectiveComponent } from '../components/for-directive/for-directive.component';
import { NasaDataComponent } from '../components/nasa-data/nasa-data.component';
import { ForPropertiesComponent } from '../components/for-properties/for-properties.component';
import { ForTrackComponent } from '../components/for-track/for-track.component';
import { Products } from '../components/fakestorecontract';
import { ClassDemoComponent } from '../components/class-demo/class-demo.component';
import { StyleDemoComponent } from '../components/style-demo/style-demo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  frmSubmit(event: any) {
    console.log('form subimit');

  }
}
