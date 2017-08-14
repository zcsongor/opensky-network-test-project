export class OpenSkyResponse {
    time: number;
    states: Array<any>;
}

export class StateVector {
    icao24: string;
    callsign: string;
    origin_country: string;
    time_position: number;
    time_velocity: number;
    lng: number;
    lat: number;
    altitude: number;
    on_ground: boolean;
    velocity: number;
    heading: number;
    vertical_rate: number;
    sensors: Array<number>;

    constructor(
        icao24: string,
        callsign: string,
        origin_country: string,
        longitude: number,
        latitude: number,
        altitude: number,
        time_position: number
    ) {
        this.icao24 = icao24;
        this.callsign = callsign;
        this.origin_country = origin_country;
        this.lng = longitude;
        this.lat = latitude;
        this.altitude = altitude;
        this.time_position = time_position;
    }
}
