import { Component, OnInit } from '@angular/core';  
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { EmployeeService } from '../employee.service';  
import { Employee } from '../employee';  
  
@Component({  
  selector: 'app-employee',  
  templateUrl: './employee.component.html',  
  styleUrls: ['./employee.component.css']  
})       
export class EmployeeComponent implements OnInit { 
  // Gender = ['male','female'] 
  dataSaved = false;  
  employeeForm: any;  
  allEmployees: Observable<Employee[]> | undefined;  
  employeeIdUpdate : any ;  
  massage = 'abc';  
  
  constructor(private formbulider: FormBuilder, private employeeService:EmployeeService) { }  
  
  ngOnInit() {  
    this.employeeForm = this.formbulider.group({  
      Empname: ['', [Validators.required]],  
      DataOfBirth: ['', [Validators.required]],  
      Emailid: ['', [Validators.required]],  
      Gender: ['', [Validators.required]],  
      Address: ['', [Validators.required]],  
      PinCode: ['', [Validators.required]],  
    });  
    this.loadAllEmployees();  
  }  
  loadAllEmployees() {  
    this.allEmployees = this.employeeService.getAllEmployee();  
  }  
  onFormSubmit() {  
    this.dataSaved = false;  
    const employee = this.employeeForm.value;  
    this.CreateEmployee(employee);  
    this.employeeForm.reset();  
  }  
  loadEmployeeToEdit(employeeId: string) {  
    this.employeeService.getEmployeeById(employeeId).subscribe(employee=> {  
      this.massage = 'abc';  
      this.dataSaved = false;  
      this.employeeIdUpdate = employee.Empid;  
      this.employeeForm.controls['Empname'].setValue(employee.Empname);  
     this.employeeForm.controls['DataOfBirth'].setValue(employee.DataOfBirth);  
      this.employeeForm.controls['Emailid'].setValue(employee.Emailid);  
      this.employeeForm.controls['Gender'].setValue(employee.Gender);  
      this.employeeForm.controls['Address'].setValue(employee.Address);  
      this.employeeForm.controls['PinCode'].setValue(employee.PinCode);  
    });  
  
  }  
  CreateEmployee(employee: Employee) {  
    if (this.employeeIdUpdate == null) {  
      this.employeeService.createEmployee(employee).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.massage = 'Record saved Successfully';  
          this.loadAllEmployees();  
          this.employeeIdUpdate=null;  
          this.employeeForm.reset();  
        }  
      );  
    } else {  
      employee.Empid = this.employeeIdUpdate;  
      this.employeeService.updateEmployee(employee).subscribe(() => {  
        this.dataSaved = true;  
        this.massage = 'Record Updated Successfully';  
        this.loadAllEmployees();  
        this.employeeIdUpdate = null;  
        this.employeeForm.reset();  
      });  
    }  
  }   
  deleteEmployee(employeeId: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.employeeService.deleteEmployeeById(employeeId).subscribe(() => {  
      this.dataSaved = true;  
      this.massage = 'Record Deleted Succefully';  
      this.loadAllEmployees();  
      this.employeeIdUpdate = null;  
      this.employeeForm.reset();  
  
    });  
  }  
}  
  resetForm() {  
    this.employeeForm.reset();  
    this.massage = 'xyz';  
    this.dataSaved = false;  
  }  
}  