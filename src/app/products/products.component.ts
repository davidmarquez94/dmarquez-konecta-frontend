import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { AlertsService } from '../services/alerts.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  constructor(
    private api: ApiService,
    private alert: AlertsService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.api.getProducts().subscribe(response =>{
      this.products = response.data;
      console.table(this.products)
    });
  }

  newProduct(){
    this.router.navigate(['new']);
  }

  editProduct(id: any){
    this.router.navigate(['edit', id]);
  }

  deleteProduct(id: any){
    this.api.deleteProduct(id).subscribe(response => {
      if(response.success == true){
        this.alert.showSuccess(response.message, 'Perfecto!');
        this.ngOnInit();
      } else {
        this.alert.showError(response.message, 'Error!');
      }
    });
  }

  newSale(){
    this.router.navigate(['sale']);
  }

}
