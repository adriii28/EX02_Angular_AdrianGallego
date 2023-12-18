import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private token : TokenService, private route: Router){}

  logOut(){
    this.route.navigate(['/login']);
    this.token.logOut();
  }
}
