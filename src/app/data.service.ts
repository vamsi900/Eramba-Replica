import { Injectable } from '@angular/core';
import{ Contact } from '../app/contact.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(){}
  private contacts: Contact[] = [];
  private contactsUpdated = new Subject<Contact[]>();
  
  addBusinessData(formData){
    const contact: Contact  = {unit: formData.unit,name: formData.name, description: formData.description,label: formData.label,type: formData.type,asset: formData.asset,liability: formData.liability};
    this.contacts.push(contact);
    this.contactsUpdated.next([...this.contacts]);
  }

  getContacts(){
    return [...this.contacts];
  }

  getContactUpdateListener(){
    return this.contactsUpdated.asObservable();
  }
}
