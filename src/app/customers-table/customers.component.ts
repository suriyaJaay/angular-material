import {Component, OnInit} from '@angular/core';
import {TableColumn} from "../table/TableColumn";
import {Customer} from "./customer";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];

  customersTableColumns: TableColumn[];

  constructor() {
  }

  ngOnInit(): void {
    this.customers = this.getCustomers();
    this.initColumns();
  }

  getCustomers(): Customer[] {
    return [
     {
          name: 'XXX-001',
          description: 'XXX-001',
          extension: {
            cusIdt: 'XXX-001',
            custName: 'Test_Cust_Alpha_1',
            adminName: 'TCA1',
            country: 'UK',
            region: 'EMEA',            
          }
        },
        {
          name: 'YYY-002',
          description: 'YYY-002',
          extension: {
            cusIdt: 'YYY-002',
            custName: 'Test_Cust_Alpha_2',
            adminName: 'TCA1',
            country: 'Norway',
            region: 'EMEA',            
          }
        },
    ];
  }

  initColumns(): void {
    this.customersTableColumns = [
      {
        name: 'Customer Name',
        dataKey: 'custName',
        position: 'left',
        isSortable: true
      },
      {
        name: 'Customer ID',
        dataKey: 'custId',
        position: 'right',
        isSortable: false
      },
      {
        name: 'Country',
        dataKey: 'country',
        position: 'right',
        isSortable: true
      },
      {
        name: 'Region',
        dataKey: 'region',
        position: 'right',
        isSortable: false
      },
     
    ];
  }

}
