import { Component, OnInit } from '@angular/core';
import { InventoryItem } from '../inventory-item';
import { InventoryItemService } from '../inventory-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-inventory-item',
  templateUrl: './create-inventory-item.component.html',
  styleUrls: ['./create-inventory-item.component.css']
})
export class CreateInventoryItemComponent implements OnInit {

  error!: String;
  inventoryItem: InventoryItem = new InventoryItem();
  constructor(private inventoryItemService: InventoryItemService, private router: Router) { }

  ngOnInit(): void {

  }

  saveInventoryItem() {
    this.inventoryItemService.createInventoryItem(this.inventoryItem).subscribe(data => {
      console.log(data);
      this.goToInventoryItemList();
    }, (error) => {
      console.log(error)
      this.error = error
    });
  }

  goToInventoryItemList() {
    this.router.navigate(['/inventory-item-list']);
  }

  onSubmit() {
    this.saveInventoryItem();
  }

}
