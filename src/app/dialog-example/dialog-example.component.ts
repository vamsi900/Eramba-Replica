import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {
  // label: any;


  constructor(private dataservice: DataService, private router:Router, public dialogRef: MatDialogRef<DialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 

  }

  businessUnits: any = ['Finance', 'Human Resources','Technology','Sales','Product','Customer Support'];
  Label: any = ['Confidential to the organisation', 'BI Tool'];
  Type: any = ['Data Asset', 'Facilities', 'People', 'Hardware', 'Software', 'IT Service', 'Network'];
  Assets: any = ['Financial Data', 'XERO Accounting System', 'Employee Contracts', 'Software / Products Built', 'Download Contacts', 'Acmes Website', 'BI Server'];
  Liabilities: any = ['GDPR', 'UK Accounting Regulations', 'Intelectual Properties Disputes', 'AML', 'Central Banks of Kenya Guidelines'];


  generalForm = new FormGroup({
    unit: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    label: new FormControl(''),
    type: new FormControl(''),
    asset: new FormControl(''),
    liability: new FormControl('')
  });

  ngOnInit() {
  } 

  onSubmit(){
    this.dataservice.addBusinessData(this.generalForm.value).subscribe(data => {
      return data;
    });
    this.generalForm.reset();
    window.location.reload();
  }

  onNoClick(){
    this.dialogRef.close();
  }



}
