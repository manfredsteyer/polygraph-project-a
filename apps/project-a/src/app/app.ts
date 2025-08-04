import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { add } from '@project-a/calc'; 

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'project-a';

  constructor() {
    console.log('highly sophisticated logic', add(1, 2));
  }
}
