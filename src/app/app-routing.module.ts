import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetComponent } from './asset/asset.component';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path:'**', redirectTo:"appcomponent", pathMatch:"full"},
  {path:'asset', component:AssetComponent},
  {path:'', redirectTo:"appcomponent", pathMatch:"full"},
  {path: 'appcomponenet', component: AppComponent},
  { path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
