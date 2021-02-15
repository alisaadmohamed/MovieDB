import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
MoviesService
@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {

 

  trindingTv:any[] =[];
  imgSrce:string = "https://image.tmdb.org/t/p/w500/";

  constructor(_MoviesService:MoviesService) {


      _MoviesService.getMovies('tv').subscribe((data)=> {
        this .trindingTv = data.results.slice(0,10);})
  


   }

   

  ngOnInit(): void {
  }

}
