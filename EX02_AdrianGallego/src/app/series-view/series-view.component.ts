import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RequestService } from '../services/request.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-series-view',
  standalone: true,
  imports: [NavbarComponent,RouterModule],
  templateUrl: './series-view.component.html',
  styleUrl: './series-view.component.css'
})
export class SeriesViewComponent {
  arrayShows : any[] =[]
  constructor(private request : RequestService){}

  ngOnInit(){
    this.request.get_shows().subscribe((data : any) => {
      this.arrayShows = data.results;
    })
  }
}
