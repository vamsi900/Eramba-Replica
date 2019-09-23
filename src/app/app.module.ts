import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { AssetComponent } from './asset/asset.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { 
         MatSidenavModule,
         MatToolbarModule,
         MatIconModule,
         MatButtonModule,
         MatMenuModule,
         MatCardModule,
         MatDialogModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSortModule} from '@angular/material/sort';
import { SearchPipe } from './search.pipe';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MapComponent } from './map/map.component';
// import { AgmCoreModule } from 'angular2-google-maps/core';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    AssetComponent,
    DialogExampleComponent,
    SearchPipe,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatSortModule,
    MatTableModule,MatCheckboxModule,ScrollingModule,
    MatSidenavModule,MatDividerModule,MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    HttpClientModule,
    MatTooltipModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUVoZThtLQhsp6ofRc2iMo88Xa7o8pqyU'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
