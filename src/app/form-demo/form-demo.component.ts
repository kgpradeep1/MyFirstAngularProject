import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-password.validator';
@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {
  submitted: boolean = false;
  productTypes = ['Laptop', 'Mobile','Television','HeadPhone'];
  myForm: FormGroup | any;
  Name: FormControl | any;
  Email: FormControl | any;
  Phonenumber: FormControl | any;
  Password: FormControl | any;
  ConformPassword: FormControl | any;
  productType: FormControl | any;
  brand: FormControl | any;
  price: FormControl | any;
  constructor() { }
  ngOnInit() {
    this.Name = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.Email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
    this.Phonenumber = new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]);
    this.Password = new FormControl('',[Validators.required,Validators.required, Validators.minLength(6),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$')]);
    this.ConformPassword=new FormControl("",[Validators.required]);
    
      // {Validator: ConfirmPasswordValidator("password", "confirmPassword")}
    
    this.productType = new FormControl('', Validators.required);
    this.brand = new FormControl('', Validators.required);
    this.price = new FormControl('', [Validators.required, Validators.min(1)]);
    this.myForm = new FormGroup({
      'Name': this.Name,
      'Email': this.Email,
      'Password': this.Password,
      'Phonenumber':this.Phonenumber,
      'conformPassword': this.ConformPassword,
    });
  }

}