import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-size1',
  templateUrl: './size1.component.html',
  styleUrls: ['./size1.component.css']
})
export class Size1Component implements OnInit {

  constructor() { }
  @Input()  Size!:number|string;
@Output() sizechange= new EventEmitter<number>();
dec()
{
this.resize(-1);
}
inc()
{
this.resize(+1);
}
resize(dt:number)
{
this.Size=Math.min(40,Math.max(8, +this.Size+dt));
this.sizechange.emit(this.Size);
}

  ngOnInit(): void {
  }

}
