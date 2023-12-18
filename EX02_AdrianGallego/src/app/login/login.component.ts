import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private token : TokenService)
  {}

  login(){

    this.token.saveToken('eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTM2Y2U5NzFlZjE4MTY0NmU4MWNjMThjNTUxNDc1MyIsInN1YiI6IjY1ODA2ZjU4ZGY4NmE4MDhmOWU4MTQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vemzP_HJCZTZyB6Y3cw8crWs9-B2iqYALGm8roXHNEk');
    this.router.navigate(['/home']);
  }
}
