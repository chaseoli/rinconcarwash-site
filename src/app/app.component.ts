import { Component } from '@angular/core';
import { fab, faYelp } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rincon-carwash-site';
  faYelp = faYelp;
  faCheckSquare = faCheckSquare;
}
