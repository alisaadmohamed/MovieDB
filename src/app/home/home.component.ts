import { Component,  OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';

MoviesService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

  searchTerm:string='';
  term:string='';
  trindingMovies:any[] =[];
  trindingTv:any[] =[];
  imgSrce:string = "https://image.tmdb.org/t/p/w500/";
  channel:any;
  channel2:any;
  constructor(_MoviesService:MoviesService) {


    this.channel =  _MoviesService.getMovies('movie').subscribe((data)=> {
      this .trindingMovies = data.results.slice(0,10);},
      
      (Error)=>{
        console.log('Connection Lost'+Error)
      }
      )

      



      this.channel2 = _MoviesService.getMovies('tv').subscribe((data)=> {
        this .trindingTv = data.results.slice(0,10);})
  


   }

   

  ngOnDestroy(): void {


  
    this.channel.unsubscribe();
    this.channel2.unsubscribe();
  }

}
