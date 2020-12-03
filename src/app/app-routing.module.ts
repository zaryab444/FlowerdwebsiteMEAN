import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import the components so they can be referenced in routes
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';



// The last route is the empty path route. This specifies
// the route to redirect to if the client side path is empty.


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: 'home', component: HomeComponent },
 
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
