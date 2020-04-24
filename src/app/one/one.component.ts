import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

interface Paintings {
  id: number;
  name: string;
  location: string;
}

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})

export class OneComponent implements OnInit {

  subTitle: string = 'Fetching data from JSON file';
  paintings$: Observable<Paintings[]>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.paintings$ = this.http.get<Paintings[]>('/data/paintings.json');
  }

}
