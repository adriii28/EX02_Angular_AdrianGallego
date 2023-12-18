import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  protected http = inject(HttpClient);
  constructor() { }

  get_movies(){
    let url: string = "https://api.themoviedb.org/3/movie/popular"
    return this.http.get<any[]>(url);
  }
  
  get_movie_details(id: string){
    let url: string = "https://api.themoviedb.org/3/movie/"+id
    return this.http.get<any[]>(url);
  }

  get_shows(){
    let url: string = "https://api.themoviedb.org/3/tv/popular"
    return this.http.get<any[]>(url);
  }

  get_show_details(id: string){
    let url: string = "https://api.themoviedb.org/3/tv/"+id
    return this.http.get<any[]>(url);
  }
}
