import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInventoryItemComponent } from './create-inventory-item/create-inventory-item.component';
import { InventoryItemDetailsComponent } from './inventory-item-details/inventory-item-details.component';
import { InventoryItemListComponent } from './inventory-item-list/inventory-item-list.component';
import { UpdateInventoryItemComponent } from './update-inventory-item/update-inventory-item.component';

const routes: Routes = [
  {path: 'inventory-item-list', component: InventoryItemListComponent},
  {path: 'create-inventory-item', component: CreateInventoryItemComponent},
  {path: '', redirectTo: 'inventory-item-list', pathMatch: 'full'},
  {path: 'update-inventory-item/:id', component: UpdateInventoryItemComponent},
  {path: 'inventory-item-details/:id', component: InventoryItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
