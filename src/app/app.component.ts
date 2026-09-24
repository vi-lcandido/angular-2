import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: number = 5;
  deletCicle = false;

  changeValue() {
    this.value++
  }

  destroyCicle() {
    this.deletCicle = true;
  }
}
