import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup

  constructor(private formBuilder:FormBuilder,
    private productService:ProductService,
    private toastrService:ToastrService) { }

  ngOnInit() {
    this.createProductAddForm()
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      productName:["",Validators.required],
      unitPrice:["", Validators.required],
      unitsInStock:["", Validators.required],
      categoryId:["",Validators.required]
    })
  }

  add() {
    if(this.productAddForm.valid) {
      let productModel = Object.assign({},this.productAddForm.value)
      this.productService.add(productModel).subscribe(data=> {
        this.toastrService.success(data.message, "Successful")
      }, responseError => {
        console.log(responseError)
        this.toastrService.error(responseError.error.message,"Failed")
      })
      
    }
    else {
      this.toastrService.error("Please fill in the required fields.","Failed")

    }
    

    //console.log(productModel)
  }
}
