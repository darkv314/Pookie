import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular17';

  toggle = false;
  toggle1 = false;

  newList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  handleClick() {
    this.toggle = !this.toggle;
    setTimeout(() => {
      this.toggle1 = !this.toggle1;
    }, 2000);
  }
}
