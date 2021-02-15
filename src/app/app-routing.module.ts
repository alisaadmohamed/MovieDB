import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { AuthGuard } from './auth.guard';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { ProfileComponent } from './myprofile/profile/profile.component';




const routes: Routes = [
  {path:'', redirectTo:'login' , pathMatch:'full'},
 {path:"home", canActivate:[AuthGuard], component:HomeComponent},
 {path:'login/register', redirectTo:'register' , pathMatch:'full'},
 {path:"about", canActivate:[AuthGuard], component:AboutComponent},
 {path:"movies", canActivate:[AuthGuard], component:MoviesComponent},
 {path:"people",canActivate:[AuthGuard],  component:PeopleComponent},
 {path:"tvshow", canActivate:[AuthGuard], component:TvshowComponent},
 {path:"moviedetails/:id", component:MoviedetailsComponent},
 {path:"login", component:LoginComponent},
 {path:"register", component:RegisterComponent},
 {path:'profile',canActivate:[AuthGuard],loadChildren: () => import('./myprofile/myprofile.module').then(m => m.MyprofileModule)},
 {path:"**" , component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],






exports: [RouterModule]
})
export class AppRoutingModule { }
