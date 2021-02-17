import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryItemListComponent } from './inventory-item-list/inventory-item-list.component';
import { CreateInventoryItemComponent } from './create-inventory-item/create-inventory-item.component';
import { FormsModule } from '@angular/forms';
import { UpdateInventoryItemComponent } from './update-inventory-item/update-inventory-item.component';
import { InventoryItemDetailsComponent } from './inventory-item-details/inventory-item-details.component'

@NgModule({
  declarations: [
    AppComponent,
    InventoryItemListComponent,
    CreateInventoryItemComponent,
    UpdateInventoryItemComponent,
    InventoryItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
