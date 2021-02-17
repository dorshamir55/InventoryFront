import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryItem } from '../inventory-item';
import { InventoryItemService } from '../inventory-item.service';

@Component({
  selector: 'app-inventory-item-details',
  templateUrl: './inventory-item-details.component.html',
  styleUrls: ['./inventory-item-details.component.css']
})
export class InventoryItemDetailsComponent implements OnInit {

  id!: number;
  inventoryItem!: InventoryItem;

  constructor(private inventoryItemService: InventoryItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.inventoryItem = new InventoryItem();
    this.inventoryItemService.getInventoryItemById(this.id).subscribe(data => {
      this.inventoryItem = data;
    });
  }

}
