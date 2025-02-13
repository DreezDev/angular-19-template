import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeServiceService } from './services/theme-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'vitacare-frontend';
  themeService = inject(ThemeServiceService);
}
