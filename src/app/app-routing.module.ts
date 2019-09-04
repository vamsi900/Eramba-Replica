import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetComponent } from './asset/asset.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'**', redirectTo:"appcomponent", pathMatch:"full"},
  {path:'asset', component:AssetComponent},
  {path:'', redirectTo:"appcomponent", pathMatch:"full"},
  {path:'dialog', component:DialogExampleComponent},
  {path: 'appcomponenet', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
