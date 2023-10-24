import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private toastr:ToastrService) { }

  showSuccess(text: any, title: any){
    this.toastr.success(text, title);
  }

  showError(text: any, title: any){
    this.toastr.error(text, title);
  }
}
