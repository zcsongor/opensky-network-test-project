import { OpenSkyResponse } from './../model/opensky.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {
  openskyBaseUrl = 'https://opensky-network.org/api/states/all';

  constructor(private http: HttpClient) { }

  getFlights(time: number): Observable<OpenSkyResponse> {
    const encodedCredentials = btoa('zcsongor:3TaQsiyosAIE');
    const headers = new HttpHeaders().set('Authorization', `Basic ${encodedCredentials}`);
    const params = new HttpParams().set('time', time.toString());

    return this.http.get<OpenSkyResponse>(this.openskyBaseUrl, { headers: headers, params: params });
  }

  getAirports() {
    return this.http.get('./assets/airport.json');
  }

}
