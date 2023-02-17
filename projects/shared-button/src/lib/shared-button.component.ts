import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared-button',
  template: `
    <p>
      shared-button works!
    </p>
  `,
  styles: [
  ]
})
export class SharedButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
