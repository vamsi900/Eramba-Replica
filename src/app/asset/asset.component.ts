import { Component, OnInit, EventEmitter, ViewChild  } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import { MatDialog}from '@angular/material'
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import{Subscription} from 'rxjs';
import { DataService } from '../data.service';
import {Asset} from './../asset.model';

import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
 private assetsSub: Subscription;
  assets: Asset[] = [];
  Asset: any;

  constructor(public dialog:MatDialog, private dataservice: DataService) { }

  ngOnInit(){
    // this.assets = this.dataservice.getAssets();
    // this.assetsSub = this.dataservice.getAssetUpdateListener()

    // .subscribe((assets: Asset[]) => {
    //   this.assets = assets;
    // })
    this.getAssets();
  }

  getAssets(){
    this.dataservice.getAssets().subscribe(data=>{
      // console.log(data);
      this.assets=data;
          });
        }

  delete(i){
    this.Asset=i;
    console.log(this.Asset)
    this.dataservice.deleteAsset(this.Asset).subscribe(data=>{
    console.log(data);
  });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExampleComponent, {
      width: '750px',
      
    });
  }

}
