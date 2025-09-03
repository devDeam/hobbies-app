import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hobbies-app';
  firstName = 'Daniel';
  lastName = 'Almanza';
  semester = '2nd';
  hobbies = ['Video Games', 'Movies', 'Music', 'Coding', 'Traveling'];
}
