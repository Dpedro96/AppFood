import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { SearchPage } from './search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    ComponentesModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [SearchPage]
})
export class SearchPageModule {}
