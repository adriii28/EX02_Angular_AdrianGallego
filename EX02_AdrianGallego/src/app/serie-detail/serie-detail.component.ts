import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RequestService } from '../services/request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie-detail',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './serie-detail.component.html',
  styleUrl: './serie-detail.component.css'
})
export class SerieDetailComponent {

  showId : string= '';
  show : any = null;
  constructor(private request : RequestService, private ruta : ActivatedRoute){}

  ngOnInit(){
    this.ruta.paramMap.subscribe(params => {
      const idFromParams = params.get('id');
      if (idFromParams !== null) {
        this.showId = idFromParams;
        console.log(this.showId);
        
        this.request.get_show_details(this.showId).subscribe( result => {
          console.log(result);
          this.show = result;
        }, 
        error => {
          console.log("error"+error);
        })
        
      } 
    })
  }
}
