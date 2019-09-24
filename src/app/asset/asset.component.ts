import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import {Asset} from './../asset.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
 private assetsSub: Subscription;
  assets: Asset[] = [];
  Asset: any;
  editdata:any=[];
  showhide: boolean;

  businessUnits: any = ['Finance', 'Human Resources','Technology','Sales','Product','Customer Support'];
  Label: any = ['Confidential to the organisation', 'BI Tool'];
  Type: any = ['Data Asset', 'Facilities', 'People', 'Hardware', 'Software', 'IT Service', 'Network'];
  Assets: any = ['Financial Data', 'XERO Accounting System', 'Employee Contracts', 'Software / Products Built', 'Download Contacts', 'Acmes Website', 'BI Server'];
  Liabilities: any = ['GDPR', 'UK Accounting Regulations', 'Intelectual Properties Disputes', 'AML', 'Central Banks of Kenya Guidelines'];


  // generalForm = new FormGroup({
  //   unit: new FormControl(''),
  //   name: new FormControl(''),
  //   description: new FormControl(''),
  //   label: new FormControl(''),
  //   type: new FormControl(''),
  //   asset: new FormControl(''),
  //   liability: new FormControl('')
  // });

  constructor(public dialog:MatDialog, private dataservice: DataService, private router:Router, private http: HttpClient) { }

  ngOnInit(){
    // this.assets = this.dataservice.getAssets();
    // this.assetsSub = this.dataservice.getAssetUpdateListener()

    // .subscribe((assets: Asset[]) => {
    //   this.assets = assets;
    // })
    this.showhide = false;
    this.getAssets();
  };

  onSubmit(form:NgForm){
    this.dataservice.addBusinessData(form.value).subscribe(data => {
      return data;
    });
    console.log(form.value);
    // this.generalForm.reset();
    window.location.reload();
  };

  updateAsset(){
    this.dataservice.updateAsset(this.editdata).subscribe(data=>{
      // console.log(data);
      this.getAssets();
    });
    window.location.reload();
  };

  getAssets(){
    this.dataservice.getAssets().subscribe(data=>{
      this.assets=data;
          });
    // console.log(this.assets);
  };

  delete(i){
    this.Asset=i;
    this.dataservice.deleteAsset(this.Asset).subscribe(data=>{});
    // console.log("asset deleted successfully");
    window.location.reload();
  };

  edit(v){
    this.editdata = v;
    // console.log(v);
  };

  

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogExampleComponent, {
  //     width: '750px',
      
  //   });
  // }

}
