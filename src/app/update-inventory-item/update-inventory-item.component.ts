import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryItem } from '../inventory-item';
import { InventoryItemService } from '../inventory-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-inventory-item',
  templateUrl: './update-inventory-item.component.html',
  styleUrls: ['./update-inventory-item.component.css']
})
export class UpdateInventoryItemComponent implements OnInit {

  inventoryItem: InventoryItem = new InventoryItem();
  error!: string;
  id!: number;

  constructor(private InventoryItemService: InventoryItemService,
     private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.InventoryItemService.getInventoryItemById(this.id).subscribe(data => {
      this.inventoryItem = data;
    },error => console.log(error));
  }

  goToInventoryItemList() {
    this.router.navigate(['/inventory-item-list']);
  }

  onSubmit() {
    this.InventoryItemService.updateInventoryItem(this.id, this.inventoryItem).subscribe(data => {
      this.goToInventoryItemList();
    }, (error) => {
      console.log(error)
      this.error = error
    });
  }

}
