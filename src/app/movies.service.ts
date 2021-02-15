import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  
  constructor(public _HttpClient:HttpClient) {}

  getMovies(mediaType:string):Observable<any>
  {

   return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=2604d0a2a4c3b2fc0ab27856d61fca70`);
  }



  getMovieDetails(id:any):Observable<any>
  {


    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2604d0a2a4c3b2fc0ab27856d61fca70`)
  }

   }

 




