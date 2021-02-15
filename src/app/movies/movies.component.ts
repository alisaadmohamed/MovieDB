import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit ,OnDestroy {

  trindingMovies:any[] =[];
  imgSrce:string = "https://image.tmdb.org/t/p/w500/";

  stopSubscribe:any;

  constructor(_MoviesService:MoviesService) {


   this.stopSubscribe =  _MoviesService.getMovies('movies').subscribe((data)=> {
      this .trindingMovies = data.results.slice(0,10);})

   }

  ngOnInit(): void {
  }


ngOnDestroy():void
{


  this.stopSubscribe.unsubscribe
  }


}
