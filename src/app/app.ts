import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./pages/home/home";
import { Navbar } from "./elementos/navbar/navbar";
import { Footer } from "./elementos/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('paginaCV');
}
