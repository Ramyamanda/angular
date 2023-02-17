import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {
   

  @Input() d1!: string;
  @Output() User = new EventEmitter()

  message="this is from output"

  passtoParent(){
    this.User.emit(this.message)
  }

  constructor() { }

  ngOnInit(): void {
  }

}


