import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.training';
  urlImage: string = 'https://loremflickr.com/320/240/nature'
  valueInput: string = '';
  savedValue: string = '';
  isMouseOver: boolean = false

  courseName: string ='Angular';

  initialValue: number = 15
  
  getValor() {
    return 1
  }

  clickedButton() {
    alert('Button clicked');
  }
  onKeyUp(event: KeyboardEvent) {
    this.valueInput = (<HTMLInputElement>event.target).value;
    
  }
  saveValue(valor: string) {
    this.savedValue = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }

  onChangeValue(event) {
    console.log(event.newValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
