import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [
    {
        ID: 1,
        OrderNumber: 35703,
        OrderDate: new Date(2014, 3, 10),
        SaleAmount: 11800,
        Terms: '15 Days',
        TotalAmount: 12175,
        CustomerStoreState: 'California',
        CustomerStoreCity: 'Los Angeles',
        Employee: 'Harv Mudd',
      },
      {
        ID: 2,
        OrderNumber: 35711,
        OrderDate: new Date(2014, 0, 12),
        SaleAmount: 16050,
        Terms: '15 Days',
        TotalAmount: 16550,
        CustomerStoreState: 'California',
        CustomerStoreCity: 'San Jose',
        Employee: 'Jim Packard',
      },
      {
        ID: 3,
        OrderNumber: 35714,
        OrderDate: new Date(2014, 0, 22),
        SaleAmount: 14750,
        Terms: '15 Days',
        TotalAmount: 15250,
        CustomerStoreState: 'Nevada',
        CustomerStoreCity: 'Las Vegas',
        Employee: 'Harv Mudd',
      },
      {
        ID: 4,
        OrderNumber: 35983,
        OrderDate: new Date(2014, 1, 7),
        SaleAmount: 3725,
        Terms: '15 Days',
        TotalAmount: 3850,
        CustomerStoreState: 'Colorado',
        CustomerStoreCity: 'Denver',
        Employee: 'Todd Hoffman',
      },
      {
        ID: 5,
        OrderNumber: 36987,
        OrderDate: new Date(2014, 2, 11),
        SaleAmount: 14200,
        Terms: '15 Days',
        TotalAmount: 14800,
        CustomerStoreState: 'Utah',
        CustomerStoreCity: 'Salt Lake City',
        Employee: 'Clark Morgan',
      }
    // Add more data as needed
  ];

  constructor(private http:HttpClient) { 

  }
  fetchuserData(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getData() {
    return this.data;
  }

  getTransection(): Observable<any> {
    return this.http.post("/api/transections", {});
  }
  getLoandata(): Observable<any> {
    return this.http.post("/api/loanreport", {});
  }

  getcookieValue(){
    return this.http.get("/api/cookie");

  }
  getpostdata(){
    const val={}
    return  this.http.post('/api/postpaymentdetails', val).subscribe((x) => {
      console.log('X: ', x);
    });

  }

  




}
