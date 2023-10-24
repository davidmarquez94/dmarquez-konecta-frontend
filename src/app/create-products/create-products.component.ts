import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlertsService } from '../services/alerts.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent {

  categories: any = [];
  constructor(
    private api: ApiService,
    private router: Router,
    private alert: AlertsService
  ){}

  ngOnInit(): void {
    this.api.getCategories().subscribe(response =>{
      this.categories = response.data;
      console.table(this.categories)
    });
  }

  newForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    reference: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    weight: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
    category_id: new FormControl('', [Validators.required]),
  });

  get username() {
    return this.newForm.get('username');
  }

  createProduct(form: any){
    this.api.postProduct(form).subscribe(data => {
      if(data.success == true){
        this.alert.showSuccess(data.message, 'Perfecto!');
        this.router.navigate(['']);
      } else {
        this.alert.showError(data.message, 'Error!');
      }
    });
  }

}
