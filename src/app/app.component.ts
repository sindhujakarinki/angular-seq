import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  forForm: FormGroup;
  for2Form: FormGroup;
  ifForm: FormGroup;
  if2Form: FormGroup;
  name = 'Angular 5';
  cheapestPrice: number;
  constructor(private fb: FormBuilder) {
    this.ifForm = this.fb.group({
      ifSelect: [''],
      operator: [''],
      secondDropdown: [''],
    });
  }

  shop1 = {
    prices: [23, 34, 67],
    products: ['product1', 'product2', 'product3'],
    Id: [1, 2, 3],
  };
  shop2 = {
    prices: [34, 64, 17],
    products: ['product1', 'product2', 'product3'],
    Id: [1, 2, 3],
  };
  ngOnInit() {
    this.forForm = this.fb.group({
      forSelect: [''],
    });
    this.for2Form = this.fb.group({
      for2Select: [''],
    });
    this.ifForm = this.fb.group({
      ifSelect: [''],
      operator: [''],
      secondDropdown: [''],
    });
    this.if2Form = this.fb.group({
      if2Select: [''],
      if22Select: [''],
    });
  }

  storeType = '';
  onForSelectChange(value: string): void {
    // console.log(value);
    this.storeType = value;
  }
  onFirstDropdownChange() {
    const selectedOption = this.ifForm.get('ifSelect').value;

    // Update operator dropdown based on the selected option
    const operatorControl = this.ifForm.get('operator');
    if (selectedOption === 'yourCommonOption') {
      operatorControl.setValue('=');
      operatorControl.disable();
    } else {
      operatorControl.enable();
    }
  }

  getOperatorOptions() {
    return [
      { label: '=', value: '=' },
      { label: '<', value: '<' },
      { label: '>', value: '>' },
      { label: '!=', value: '!=' },
      { label: '<=', value: '<=' },
      { label: '>=', value: '>=' },
    ];
  }
  storesecondType = '';
  onSecondForSelectChange(value: string): void {
    // console.log(value);
    this.storesecondType = value;
  }

  getIfDropdown() {
    // console.log(this.shop1, this.storeType);
    return this.shop1[this.storeType];
  }
  getIfSecondDropdown() {
    // console.log(this.shop2, this.storeType);
    return this.shop2[this.storeType];
  }
  getIf2Dropdown() {
    return this.shop1.products.map((product) => `${product}.price`);
  }
  getIf2secondDropdown() {
    return this.shop2.products.map((product) => `${product}.price`);
  }
  printCheapestPrice(): void {
    const shop1Column = this.forForm.get('forSelect').value;
    const shop2Column = this.for2Form.get('for2Select').value;
    console.log('Selected Columns:', shop1Column, shop2Column);

    const shop1Products = this.shop1[shop1Column];
    const shop2Products = this.shop2[shop2Column];
    console.log('Shop1 Products:', shop1Products);
    console.log('Shop2 Products:', shop2Products);

    const shop1Prices = this.if2Form.get('if2Select').value;
    const shop2Prices = this.if2Form.get('if22Select').value;
    console.log('Selected Prices:', shop1Prices, shop2Prices);

    const shop1ProductName = shop1Prices.split('.')[0];
    const shop2ProductName = shop2Prices.split('.')[0];

    const shop1ProductIndex = this.shop1.products.indexOf(shop1ProductName);
    const shop2ProductIndex = this.shop2.products.indexOf(shop2ProductName);

    if (shop1ProductIndex !== -1 && shop2ProductIndex !== -1) {
      const shop1Price = this.shop1.prices[shop1ProductIndex];
      const shop2Price = this.shop2.prices[shop2ProductIndex];
      console.log('Shop1 Price:', shop1Price);
      console.log('Shop2 Price:', shop2Price);
      this.cheapestPrice = Math.min(shop1Price, shop2Price);
      console.log('Cheapest Price:', this.cheapestPrice);
    } else {
      console.error('Selected products not found in the products array');
    }
  }
}
