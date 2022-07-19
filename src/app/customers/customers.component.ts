import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customerList: any = [];

  constructor(
    private apiService: ApiService
  ) { }


  users: any = [
    {
      userName: "Hollywood",
      email: "test@test.com",
      
    },
    {
      userName: "Bollywood",
      email: "test@test.com",
      
    },
    {
      userName: "Tollywood",
      email: "test@test.com",
      
    },
  ]

  ngOnInit(): void {
    this.getAllRecords();
  }

  
  // Get All Records
  getAllRecords() {
    this.apiService.getCustomers().subscribe((response: any) => {
      this.customerList = response.Data;
      console.log('this.customerList :', this.customerList);
    },
      (error: HttpErrorResponse) => {
        console.log('error :', error);
      }
    );
  }


}
