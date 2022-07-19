import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList: any = [];

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
    this.apiService.getUsers().subscribe((response: any) => {
      this.userList = response.Data;
      console.log('this.userList :', this.userList);
    },
      (error: HttpErrorResponse) => {
        console.log('error :', error);
      }
    );
  }


}
