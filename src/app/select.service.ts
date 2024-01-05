import { Injectable } from '@angular/core';
import { List1 } from './list1';
import { List2 } from './list2';
import { Product } from './product';

@Injectable()
export class SelectService {
  getLists1() {
    return [new List1(1, 'Shop1'), new List1(2, 'Shop2')];
  }

  getLists2() {
    return [new List2(1, 1, 'Shop2'), new List2(1, 2, 'Shop1')];
  }
  getShop1Products(): Product[] {
    return [
      { id: 1, name: 'Product1', price: 30.99 },
      { id: 2, name: 'Product2', price: 40.99 },
      { id: 3, name: 'Product3', price: 50.99 },
    ];
  }

  getShop2Products(): Product[] {
    return [
      { id: 1, name: 'Product1', price: 35.99 },
      { id: 2, name: 'Product2', price: 45.99 },
      { id: 3, name: 'Product3', price: 70.99 },
    ];
  }
}
