import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  number: number = 0;

  addOne() {
    this.number++
  }
}
