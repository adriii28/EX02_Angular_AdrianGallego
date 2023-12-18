import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RequestService } from '../services/request.service';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pelis-view',
  standalone: true,
  imports: [NavbarComponent, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pelis-view.component.html',
  styleUrl: './pelis-view.component.css',
})
export class PelisViewComponent {
  arrayFilm: any[] = [];
  searchText: string = '';
  search : FormGroup;

  constructor(private request: RequestService, private formBuilder: FormBuilder) {
    this.search = this.formBuilder.group({
      film: ['', Validators.required]
    });
  }

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

  searchFilm(){
    console.log('entra');
      const text : any = this.search.get("film");
      this.request.get_find_film(text).subscribe((data : any) => {
        console.log(data);
      })
  }
}
