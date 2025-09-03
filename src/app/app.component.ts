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
  series = ['The Office', 'Parks and Rec', 'Breaking Bad', 'Stranger Things', 'The Mandalorian', 'The Witcher', 'Game of Thrones',
    'Suits', 'Friends', 'How I Met Your Mother'
  ];
}
