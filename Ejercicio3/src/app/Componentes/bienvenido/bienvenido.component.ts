import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})
export class BienvenidoComponent {
  constructor(private router: Router){

  }

  NavigateToLoginComponent(){
    this.router.navigateByUrl('Login');
  }
}
