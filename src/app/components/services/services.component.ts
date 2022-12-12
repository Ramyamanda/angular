import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../data.service';



@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
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
