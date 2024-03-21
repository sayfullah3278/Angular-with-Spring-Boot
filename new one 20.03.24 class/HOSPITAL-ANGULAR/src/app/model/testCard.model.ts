export class TestCart {
    product_id: number;
    productName: string;
    department: string;
    price: number;
  
    constructor(product_id: number = 0, productName: string = '', department: string = '', price: number = 0) {
        this.product_id = product_id;
        this.productName = productName;
        this.department = department;
        this.price = price;
      
     
    }
  }
 