import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    constructor(private router: Router){

    }

    NavigateToBienvenidoComponent(){
      this.router.navigateByUrl('Bienvenido');
    }

    NavigateToErrorComponent(){
      this.router.navigateByUrl('Error');
    }
}
