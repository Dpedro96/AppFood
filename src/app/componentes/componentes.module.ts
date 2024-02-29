import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { IonicModule } from '@ionic/angular';
import { LoadingRestaurantComponent } from './loading-restaurant/loading-restaurant.component';
import { EmptyScreeComponent } from './empty-scree/empty-scree.component';
import { RequestsComponent } from './requests/requests.component';
import { LoadingRequestsComponent } from './loading-requests/loading-requests.component';



@NgModule({
  declarations: [RestaurantComponent, LoadingRestaurantComponent, EmptyScreeComponent, RequestsComponent, LoadingRequestsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[RestaurantComponent, LoadingRestaurantComponent, EmptyScreeComponent, RequestsComponent, LoadingRequestsComponent]
})
export class ComponentesModule { }
