import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'angel';

  power = 10;

  items = ['angel', 'nicolas', 'perez', 'julian'];

  addItem() {
    this.items.push('new');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
