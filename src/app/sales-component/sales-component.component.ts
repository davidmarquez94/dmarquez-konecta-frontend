import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlertsService } from '../services/alerts.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'sales-component',
  templateUrl: './sales-component.component.html',
  styleUrls: ['./sales-component.component.css']
})
export class SalesComponentComponent {

  employees: any = [];
  products: any = [];
  constructor(
    private api: ApiService,
    private router: Router,
    private alert: AlertsService
  ){}

  ngOnInit(): void {
    this.api.getEmployees().subscribe(response =>{
      this.employees = response.data;
      console.table(this.employees)
    });

    this.api.getProducts().subscribe(response => {
      this.products = response.data;
    })
  }

  saleForm = new FormGroup({
    employee_id: new FormControl('', [Validators.required]),
    product_id: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required])
  });

  createSale(form: any){
    this.api.createSale(form).subscribe(response => {
      if(response.success == true){
        this.alert.showSuccess(response.message, 'Perfecto!');
        this.router.navigate(['']);
      } else {
        this.alert.showError(response.message, 'Error!');
      }
    })
  }

}
