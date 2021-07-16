import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'register',
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'login',
        component: RegisterComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
