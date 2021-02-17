import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { InventoryItem } from './inventory-item';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryItemService {

  private baseURL = "http://localhost:8080/items";

  constructor(private httpClient : HttpClient) { }

  getInventoryItemList(): Observable<InventoryItem[]> {
    return this.httpClient.get<InventoryItem[]>(`${this.baseURL}`);
  }

  createInventoryItem(inventoryItem: InventoryItem): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, inventoryItem)
    .pipe(catchError(this.amountError));
  }

  getInventoryItemById(id: number): Observable<InventoryItem> {
    return this.httpClient.get<InventoryItem>(`${this.baseURL}/${id}`);
  }

  updateInventoryItem(id: number, inventoryItem: InventoryItem): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, inventoryItem)
    .pipe(catchError(this.amountError));
  }

  deleteInventoryItem(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  amountError(error: any) {
    return throwError("This field cannot be negative");
  }
}
