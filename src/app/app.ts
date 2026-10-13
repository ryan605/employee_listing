import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Sidebar } from './sidebar/sidebar';
import { Topbar } from './topbar/topbar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Sidebar, Topbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employee_listing');
}
