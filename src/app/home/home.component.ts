import { Observable } from 'rxjs/Rx';
import { OpenSkyResponse, StateVector } from './../model/opensky.model';
import { HomeService } from './home.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  coordDiff = 0.3;
  loading = false;
  minutes = '0';

  modalRef: BsModalRef;
  departingFlights: Array<StateVector> = [];
  arrivingFlights: Array<StateVector> = [];
  airports: any;
  selectedAirport: any;

  constructor(private modalService: BsModalService, private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getAirports().subscribe(data => this.airports = data);
  }

  openModal(template: TemplateRef<any>, airport: any) {
    this.modalRef = this.modalService.show(template);
    this.selectedAirport = airport;
    this.getAirportInformation(this.selectedAirport);
  }

  getAirportInformation(airport: any, minutes = this.minutes) {
    this.loading = true;
    const { lat: airportLat, lng: airportLng } = airport.location;

    this.departingFlights = [];
    this.arrivingFlights = [];

    // get flight info X minutes ago
    const firstRequest = this.homeService.getFlights(Math.round(Date.now() / 1000 - parseInt(minutes, 10) * 60));
    // get flight info (X + 1) minutes ago
    const secondRequest = this.homeService.getFlights(Math.round(Date.now() / 1000 - (parseInt(minutes, 10) + 1) * 60));

    Observable.forkJoin([firstRequest, secondRequest])
      .subscribe(data => {
        const [firstResponse, secondResponse] = data;

        // convert arrays to entities
        const currentFlightInfos = firstResponse.states
          .map(state => this.createNewStateVector(state))
          .filter(state => state.altitude);

        const pastFlightInfos = secondResponse.states
          .map(state => this.createNewStateVector(state))
          .filter(state => state.altitude);

        // filtering flights that are close to the given airport
        const flights = currentFlightInfos
          .filter(stateVector => airportLat - this.coordDiff < stateVector.lat
            && stateVector.lat < airportLat + this.coordDiff)
          .filter(stateVector => airportLng - this.coordDiff < stateVector.lng
            && stateVector.lng < airportLng + this.coordDiff);

        // get departing flights by altitude change
        this.departingFlights = flights.filter(currentFlightInfo => {
          const pastFlightInfo = pastFlightInfos
            .find(state => currentFlightInfo.icao24 === state.icao24);
          if (pastFlightInfo && pastFlightInfo.altitude < currentFlightInfo.altitude) {
            return true;
          }
        });

        // for the sake of simplicity, the rest of the flights are declared as arriving flights
        this.arrivingFlights = this.difference(flights, this.departingFlights);
        this.loading = false;
      });
  }

  private createNewStateVector(state: any) {
    return new StateVector(state[0], state[1], state[2], state[5], state[6], state[7], state[3]);
  }

  private difference(arr1, arr2) {
    return arr1.filter(function (item1) {
      return !arr2.find(function (item2) {
        return item1.icao24 === item2.icao24;
      });
    });
  }

}
