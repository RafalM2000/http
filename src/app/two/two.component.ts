import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  subTitle: string = 'Fetching text from a file';
  exampleText: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('/data/authors.json', {responseType: 'text'})
    .subscribe(
      res => this.exampleText = res,
      err => console.log('Błąd pobierania pliku: ', err)
    );
  }

}
