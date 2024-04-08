import { Component, OnInit } from '@angular/core';
import { TestCart } from '../../model/testCard.model';
import { TestCartServiceService } from '../../service/test-cart-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-cart',
  templateUrl: './test-cart.component.html',
  styleUrl: './test-cart.component.css'
})
export class TestCartComponent implements OnInit {
  testCarts!: TestCart[];
  selectedTestCart!: TestCart;

  constructor(private testCartService: TestCartServiceService) { }

  ngOnInit(): void {
    this.getAllTestCarts();
  }

  getAllTestCarts(): void {
    this.testCartService.getAllTestCarts()
      .subscribe(testCarts => this.testCarts = testCarts);
  }

  
  createTestCart(addToCartForm:NgForm): void {
    if (addToCartForm.invalid) {
      return;
    }
    const { productName, department, price } = addToCartForm.value;
    const newTestCart: TestCart = { productName, department, price } as TestCart;
    this.testCartService.createTestCart(newTestCart)
    .subscribe(testCart => {
      this.testCarts.push(testCart);
      addToCartForm.resetForm(); // Reset the form after adding the item
    });
}

  onSelect(testCart: TestCart): void {
    this.selectedTestCart = testCart;
  }

  // createTestCart(productName: string, department: string, price: number): void {
  //   const newTestCart: TestCart = { productName, department, price } as TestCart;
  //   this.testCartService.createTestCart(newTestCart)
  //     .subscribe(testCart => {
  //       this.testCarts.push(testCart);
  //       this.selectedTestCart = new TestCart() ; // Clear selected test cart
  //     });
  // }

  updateTestCart(): void {
    if (this.selectedTestCart) {
      this.testCartService.updateTestCart(this.selectedTestCart.productId, this.selectedTestCart)
        .subscribe(() => {
          // Logic after update
        });
    }
  }
  deleteTestCart(testCart?: TestCart): void {
    if (!testCart && this.selectedTestCart) {
      testCart = this.selectedTestCart;
    }
  
    if (testCart) {
      this.testCartService.deleteTestCart(testCart.productId)
        .subscribe(() => {
          this.testCarts = this.testCarts.filter(tc => tc !== testCart);
          if (testCart === this.selectedTestCart) {
            this.selectedTestCart = new TestCart(); // Clear selected test cart
          }
        });
    }
  }
  }