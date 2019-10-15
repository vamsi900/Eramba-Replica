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
import { SliderModule } from 'angular-image-slider';
import {SlideshowModule} from 'ng-simple-slideshow';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ChartsComponent } from './charts/charts.component';
// import { ChartsModule } from 'ng2-charts';
import { ChartsModule } from 'ng2-charts-x';
import { GoogleChartsModule } from 'angular-google-charts';
@NgModule({
  declarations: [
    AppComponent,
    AssetComponent,
    SearchPipe,
    MapComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatSortModule,ChartsModule,
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
    SliderModule,
    SlideshowModule,GoogleChartsModule,
    Ng2CarouselamosModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGAGfplQRLPq8PL2I1kgGNuBio9s3nd8M'
    }),
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
