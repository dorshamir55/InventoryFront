import { Component, OnInit } from '@angular/core';
import { InventoryItem } from '../inventory-item';
import { InventoryItemService } from '../inventory-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-item-list',
  templateUrl: './inventory-item-list.component.html',
  styleUrls: ['./inventory-item-list.component.css']
})
export class InventoryItemListComponent implements OnInit {

  invetoryItems: InventoryItem[] = [];

  constructor(private inventoryItemService : InventoryItemService, private router: Router) { }

  ngOnInit(): void {
    // this.invetoryItems = [{
    //   "itemNo" : 1,
    //   "name" : "Box",
    //   "amount" : 10,
    //   "inventoryCode" : "AFD5erafa"
    // }];
    this.getInventoryItems();
  }

  updateInventoryItem(id: number) {
    this.router.navigate(['/update-inventory-item', id]);
  }

  private getInventoryItems() {
    this.inventoryItemService.getInventoryItemList().subscribe(data => {
      this.invetoryItems = data;
    });
  }

  deleteInventoryItem(id: number) {
    this.inventoryItemService.deleteInventoryItem(id).subscribe(data => {
      console.log(data);
      this.getInventoryItems();
    })
  }

  inventoryItemDetails(id: number) {
    this.router.navigate(['/inventory-item-details', id]);
  }
}
