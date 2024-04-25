import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

  constructor(private router: Router){

  }

  NavigateToLoginComponent(){
    this.router.navigateByUrl('Login');
  }
}
