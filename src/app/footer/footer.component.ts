import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    links = [
    { name: 'Mail', url: 'mailto:dalmanzam@cuc.edu.co'},
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/almanzadaniel/'},
    { name: 'GitHub', url: 'https://github.com/devDeam/'}
  ];
}
