import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Authors {
  name: string;
  link: string;
  desc: string;
}

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})

export class OneComponent implements OnInit {

  subTitle: string = 'Fetching data from JSON file';
  authors: Authors[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Authors[]>('/data/authors.json').
    subscribe(
      data => this.authors = data,
      err => console.log('Wystąpił Błąd podczas pobierania pliku:', err)
    );
  }
}
