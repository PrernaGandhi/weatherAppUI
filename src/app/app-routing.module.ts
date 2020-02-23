import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { AddAddressComponent } from './add-address/add-address.component';


const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'delete',
    component: DeleteComponent
  },
  {
    path: 'address',
    component: AddAddressComponent
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
