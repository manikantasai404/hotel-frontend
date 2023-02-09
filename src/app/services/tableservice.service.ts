import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TableserviceService {

  constructor(public http: HttpClient) { }


  getTableData () {
    return this.http.get(environment.properties.url + 'table/tables');
  }
}
