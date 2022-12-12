import { Component, EventEmitter, Input,Output, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() fromparent=""
  @Input() fromParent=""
  @Input() address=""

  childData ="Data from child component";
  @Output() mydecorator = new EventEmitter();
  Data="hii parent";
  @Output() mydata= new EventEmitter();


  constructor(private dts:DataService) { }
  service=this.dts.serviceMsg;

  ngOnInit(): void {
  }
  sendData(){

    this.mydecorator.emit(this.childData);
    

}
send(){
  this.mydata.emit(this. Data)
  }
}
