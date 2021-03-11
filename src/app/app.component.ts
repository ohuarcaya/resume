import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'resume';
  products = [{
    'name': 'chiken',
    'price': 13.2
  },{
    'name': 'egg',
    'price': 1.2
  }]
  tiles = [
    {text: 'One', cols: 1, rows: 4, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ]
}