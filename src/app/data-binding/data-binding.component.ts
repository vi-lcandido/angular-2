import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.training';
  urlImage: string = 'https://loremflickr.com/320/240/nature'
  getValor() {
    return 1
  }
  constructor() { }

  ngOnInit() {
  }

}
