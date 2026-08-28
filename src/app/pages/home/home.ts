import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  descargarCV(): void {
    const link = document.createElement('a');
    link.href = '/Rey_Emmanuel_Picazo_Perez_CV.pdf';
    link.download = 'Rey_Emmanuel_Picazo_Perez_CV.pdf';
    link.click();
  }

}
