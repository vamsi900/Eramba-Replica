import { Injectable } from '@angular/core';
import{ Asset } from '../app/asset.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient){}
  private assets: Asset[] = [];
  private assetsUpdated = new Subject<Asset[]>();

  getAssetUpdateListener(){
    return this.assetsUpdated.asObservable();
  }
  
  addBusinessData(data:any):Observable<any>{
    // const asset: Asset  = {unit: formData.unit,name: formData.name, description: formData.description,label: formData.label,type: formData.type,asset: formData.asset,liability: formData.liability};
    // this.assets.push(asset);
    // this.assetsUpdated.next([...this.assets]);
    console.log(data);
    return this.http.post("http://localhost:3000/postAsset",data);
  }

  getAssets():Observable<any>{
    return this.http.get("http://localhost:3000/getAsset");
    // return [...this.assets];
  }

  deleteAsset(data:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/deleteAsset/${data._id}`);
  };
    
  updateAsset(data:any):Observable<any>{
    return this.http.put('http://localhost:3000/editAsset',data)
  };
}
