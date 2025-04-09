
import { Routes, UrlSerializer } from '@angular/router';
import { LoginComponent } from '../components/web-app/login/login.component';
import { NavBarComponent } from '../components/web-app/nav-bar/nav-bar.component';
import { RegisterComponent } from '../components/web-app/register/register.component';
import { HomeComponent } from '../components/web-app/home/home.component';
import { NgIfComponent } from '../components/ng-if/ng-if.component';
import { CursolComponent } from '../components/web-app/cursol/cursol.component';
import { UserComponent } from '../components/web-app/user/user.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },

    {
        path:'navBar',
        component:NavBarComponent,
        children:[
            {
                path:'home',
                component:HomeComponent,
            },

            {
                path:'cursol',
                component:CursolComponent
            },

            {
                path:'user',
                component:UserComponent
            },
        
        ]
    },
    {
        path:'register',
        component:RegisterComponent     
    },
    {
        path:'ngIf',
        component:NgIfComponent
    },

];
