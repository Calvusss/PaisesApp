import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url_base: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  getParams() {
    return new HttpParams().set('fields',
      'flags,name,capital,region,subregion,population,area,cca2,translations');
  }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.url_base}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.getParams() });
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.url_base}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.getParams() });
  }

  buscarRegion(termino: string): Observable<Country[]> {
    const url = `${this.url_base}/region/${termino}`;

    return this.http.get<Country[]>(url, { params: this.getParams() });
  }

  getPaisPorAlfa(id: string): Observable<Country> {
    const url = `${this.url_base}/alpha/${id}`;
    return this.http.get<Country>(url, { params: this.getParams() });
  }
}
