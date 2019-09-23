import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import { restaurant } from '../restaurant.model';
//Marker
interface marker{
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //zoom level
  zoom: number = 14;
  //start position
  lat: number = 17.450654;
  lng: number = 78.3751234;
  //Markers
  // markers: marker[] = [
  //   {
  //     name: 'Place 1',
  //     lat: 17.449988,
  //     lng: 78.3860045,
  //     draggable: true
  //   },
  //   {
  //     name: 'Place 2',
  //     lat: 17.450374,
  //     lng: 78.3902186,
  //     draggable: false
  //   },
  //   {
  //     name: 'Place 3',
  //     lat: 17.550374,
  //     lng: 78.4002186,
  //     draggable: false
  //   },
  // ]
  restaurants: restaurant[] = [];
  public show:boolean = false;
  public buttonName:any = 'Show Map';

  constructor(public mapService: MapService ) { }

  ngOnInit() {
    this.restaurants = this.mapService.getAll();
  }

  toggle() {
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide Map";
    else
      this.buttonName = "Show Map";
  }

  clickedMarker(restaurant: restaurant, index: number){
    console.log('clicked marker: '+restaurant.name+ ' at index ' +index);
  }

  mapClicked($event: any){
    var newMarker = {
      name: 'Untitled',
      cost: 0,
      address: 'Unknown',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }
    this.restaurants.push(newMarker);
  }

  markerDragEnd(restaurant: any, $event: any){
    console.log('dragEnd', restaurant, $event);

    var updMarker = {
      name: restaurant.name,
      lat: parseFloat(restaurant.lat),
      lng: parseFloat(restaurant.lng),
      draggable: false
    }
    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
  }

}
