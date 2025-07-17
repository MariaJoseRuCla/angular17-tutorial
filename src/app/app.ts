import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  userName: string = 'María José';


}
