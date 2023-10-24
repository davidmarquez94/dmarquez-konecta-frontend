import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AlertsService } from '../services/alerts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent {

  categories: any = [];
  product: any = [];
  constructor(
    private api: ApiService,
    private router: Router,
    private active_route: ActivatedRoute,
    private alert: AlertsService
  ){}

  editForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    reference: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    weight: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
    category_id: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    let product_id = this.active_route.snapshot.paramMap.get('id');
    this.api.getCategories().subscribe(response =>{
      this.categories = response.data;
      console.table(this.categories)
    });

    this.api.getProduct(product_id).subscribe(data => {
      this.product = data.data[0];
      this.editForm.controls['id'].setValue(this.product.id);
      this.editForm.controls['name'].setValue(this.product.name);
      this.editForm.controls['reference'].setValue(this.product.reference);
      this.editForm.controls['price'].setValue(this.product.price);
      this.editForm.controls['weight'].setValue(this.product.weight);
      this.editForm.controls['stock'].setValue(this.product.stock);
      this.editForm.controls['category_id'].setValue(this.product.category_id);
    });
  }

  editProduct(form:any){
    this.api.putProduct(form).subscribe(data => {
      if(data.success == true){
        this.alert.showSuccess(data.message, 'Perfecto!');
        this.router.navigate(['']);
      } else {
        this.alert.showError(data.message, 'Error!');
      }
    });
  }
}
