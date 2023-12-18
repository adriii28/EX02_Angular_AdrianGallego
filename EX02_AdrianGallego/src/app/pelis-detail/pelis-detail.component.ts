import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RequestService } from '../services/request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelis-detail',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './pelis-detail.component.html',
  styleUrl: './pelis-detail.component.css'
})
export class PelisDetailComponent {

  filmId : string= '';
  film : any = null;
  constructor(private request : RequestService, private ruta : ActivatedRoute){}

  ngOnInit(){
    this.ruta.paramMap.subscribe(params => {
      const idFromParams = params.get('id');
      if (idFromParams !== null) {
        this.filmId = idFromParams;
        console.log(this.filmId);
        
        this.request.get_movie_details(this.filmId).subscribe( result => {
          console.log(result);
          this.film = result;
        }, 
        error => {
          console.log("error"+error);
        })
        
      } 
    })
  }
}
