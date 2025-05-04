import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ContributionsComponent } from "./components/contributions/contributions.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { SearchComponent } from './components/search/search.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, DashboardComponent, ContributionsComponent, SettingsComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nexus';
}
