import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: WeatherDetailsComponent },
  { path: ' ', redirectTo: '/weatherdetails', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
