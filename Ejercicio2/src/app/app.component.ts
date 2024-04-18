import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularProj';

  edadUno: string = "";
  edadDos: string = "";
  promedio: number = 0;
  suma: number = 0;

  calcular(){
    this.suma = parseInt(this.edadUno) + parseInt(this.edadDos);
    this.promedio = (parseInt(this.edadUno) + parseInt(this.edadDos)) / 2;
  }

  limpiar(){
    this.suma = 0;
    this.promedio = 0;
    this.edadUno = "";
    this.edadDos = "";
  }
}
