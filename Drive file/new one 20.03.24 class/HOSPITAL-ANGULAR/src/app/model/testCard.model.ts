export class TestCart {
    productId: number;
    productName: string;
    department: string;
    price: number;
  
    constructor(productId: number = 0, productName: string = '', department: string = '', price: number = 0) {
        this.productId = productId;
        this.productName = productName;
        this.department = department;
        this.price = price;
      
     
    }
  }
 