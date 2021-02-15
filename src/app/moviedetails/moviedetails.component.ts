import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../movies.service';




@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

movieDetails:any;
  id:any;
  imgSrce:string = "https://image.tmdb.org/t/p/w500/";
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService) {

   this.id= _ActivatedRoute.snapshot.params.id;

this._MoviesService.getMovieDetails(this.id).subscribe((data)=>{

this.movieDetails = data
})
   }

  ngOnInit(): void {
  }

}
