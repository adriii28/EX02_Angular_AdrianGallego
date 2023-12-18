import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RequestService } from '../services/request.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pelis-view',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './pelis-view.component.html',
  styleUrl: './pelis-view.component.css',
})
export class PelisViewComponent {
  arrayFilm: any[] = [];
  constructor(private request: RequestService) {}

  ngOnInit() {
    this.request.get_movies().subscribe(
      (data: any) => {
        console.log(data);
        this.arrayFilm = data.results;
        

      },
      (error) => {
        console.log('error' + error);
      }
    );
  }
}
