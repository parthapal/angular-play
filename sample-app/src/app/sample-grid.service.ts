import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SampleGridService {
  
  constructor(private http: HttpClient) { }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/mydata.json');
}
public setDataGrid(data) {
  //const fixdata : any = {make: 'Toyota', model: 'Celica', price: 3333};
  //this.http.put('./assets/mydata.json', JSON.stringify(data)).subscribe();
  
}

public getDataGrid() : Observable<any> {
  //return this.http.get('http://localhost:8080/customers');
  return this.http.get('./assets/mydata.json');
  //return (this.dataGrid);
}
}
