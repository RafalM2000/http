import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  subTitle: string = 'Fetching text from a file';

  constructor() { }

  ngOnInit(): void {

  }

}
