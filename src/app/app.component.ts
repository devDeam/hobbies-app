import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NgbCollapseModule, NgbAccordionModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isCollapsed = false;
  title = 'hobbies-app';
  firstName = 'Daniel';
  lastName = 'Almanza';
  semester = '2nd';
  hobbies = ['Video Games', 'Movies', 'Music', 'Coding', 'Traveling'];
  series = ['The Office', 'Parks and Rec', 'Breaking Bad', 'Stranger Things', 'The Mandalorian', 'The Witcher', 'Game of Thrones',
    'Suits', 'Friends', 'How I Met Your Mother'
  ];
}
