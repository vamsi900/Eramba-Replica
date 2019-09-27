import { Injectable } from '@angular/core';
import {RESTAURANTS} from "./mock-restaurants";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  restaurants: { name?: string; cost: number; address: string; lat: number; lng: number; draggable: boolean; images: any}[];

  constructor() { 
    this.restaurants = RESTAURANTS;
  }

  getAll(){
    return this.restaurants;
  }



}
