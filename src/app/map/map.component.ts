import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import { restaurant } from '../restaurant.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';
//Marker
interface marker{
  name?: string;
  cost: any;
  address: any;
  lat: number;
  lng: number;
  draggable: boolean;
  images: any;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //zoom level
  zoom: number = 15;
  //start position
  lat: number = 17.450654;
  lng: number = 78.3751234;

  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;
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
      draggable: false,
      images: 0,
    }
    this.restaurants.push(newMarker);
  }

  markerDragEnd(restaurant: any, $event: any){
    console.log('dragEnd', restaurant, $event);

    var updMarker = {
      name: restaurant.name,
      cost: 0,
      address: 'Unknown',
      lat: parseFloat(restaurant.lat),
      lng: parseFloat(restaurant.lng),
      draggable: false
    }
    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
  }

  addMarker(){
    console.log("Adding marker");
    if(this.markerDraggable == 'yes'){
      var isDraggable = true;
    } else {
      var isDraggable = false;
    }
    var newMarker = {
      name: this.markerName,
      cost: 0,
      address: 'unknown',
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable,
      images: 0, 
    }
    this.restaurants.push(newMarker);
  }

}
