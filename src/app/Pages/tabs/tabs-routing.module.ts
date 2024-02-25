import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
  {
    path: 'home',
    loadChildren: () => import('../../Pages/tabs/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('../../Pages/tabs/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('../../Pages/tabs/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('../../Pages/tabs/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
]
},
  {
    path: 'restaurants/:restaurantId',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
