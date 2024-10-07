import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenu} from '@angular/material/menu'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule,MatMenu,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})

export class AppComponent {
  title = 'klung-ya-web-angular-app';
}
