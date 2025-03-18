import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TitleComponent } from "./components/title/title.component";
import { PopularCoursesComponent } from "./components/popular-courses/popular-courses.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TitleComponent, PopularCoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nexus';
}
