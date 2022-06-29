import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  Title="New text"

  cellpnone(valu:any)
  { console.log("Phone number"+ valu);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
