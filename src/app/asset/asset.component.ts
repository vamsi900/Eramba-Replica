import { Component, OnInit, EventEmitter, ViewChild  } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import { MatDialog}from '@angular/material'
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import{Subscription} from 'rxjs';
import { DataService } from '../data.service';
import {Contact} from './../contact.model';

import {MatSort} from '@angular/material/sort';
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
//   description: string;
//   label: string;
//   type: string;
//   liabilities: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'REVIEW EXPIRED', weight: 2, symbol: 'Customer Support', description:'Computer for customer service representative', label:'', type:'Data Asset', liabilities:'nothing' },
//   {position: 2, name: 'REVIEW EXPIRED', weight: 2, symbol: 'Product', description:'id from 3rd party', label:'BI Tool', type:'Data Asset', liabilities:'nothing'},
//   {position: 3, name: 'REVIEW EXPIRED', weight: 2, symbol: 'Product', description:'IDs', label:'BI Tool', type:'Data Asset', liabilities:'nothing'},
//   {position: 4, name: 'REVIEW EXPIRED', weight: 2, symbol: 'Technology', description:'Software Asset', label:'BI Tool', type:'Data Asset', liabilities:'nothing'},
//   {position: 5, name: 'REVIEW EXPIRED', weight: 2, symbol: 'Human Resources', description:'', label:'', type:'Software', liabilities:'nothing'},
//   {position: 6, name: 'REVIEW EXPIRED', weight: 2, symbol: 'Technology', description:'', label:'Confidential to the organisation', type:'Data Asset', liabilities:'nothing'},
//   {position: 7, name: 'REVIEW EXPIRED', weight: 2, symbol: 'Technology', description:'', label:'', type:'Software', liabilities:'nothing'},
//   {position: 8, name: 'REVIEW EXPIRED', weight: 2, symbol: 'Human Resources', description:'', label:'', type:'People', liabilities:'nothing'},
//   {position: 9, name: 'REVIEW EXPIRED', weight: 2, symbol: 'Finance', description:'', label:'Confidential to the organisation', type:'Software', liabilities:'nothing'},
//   {position: 10, name: 'REVIEW EXPIRED', weight: 2, symbol: 'Finance', description:'', label:'Confidential to the organisation', type:'Data Asset', liabilities:'nothing'},
// ];
@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
 private contactsSub: Subscription;
  contacts: Contact[] = [];

  constructor(public dialog:MatDialog, private dataservice: DataService) { }

  ngOnInit(){
    this.contacts = this.dataservice.getContacts();
    this.contactsSub = this.dataservice.getContactUpdateListener()

    .subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    })
  }

  displayedColumns: string[] = ['select', 'actions', 'status', 'reviews', 'related_business_units', 'name', 'description', 'label', 'type', 'liabilities'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<Contact>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
     const numSelected = this.selection.selected.length;
     const numRows = this.contacts.length;
     return numSelected === numRows;
   }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.contacts.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Contact): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExampleComponent, {
      width: '750px',
      
    });
}

}
