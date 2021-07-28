/* export interface Customer {
  name: string;
  age: number;
} */


export interface Customers {
    name: string;
    description: null | string;
    obj: Obj;
}

export interface Obj {
    CustId: string;
    custName: string;    
    country: string;
    region: string;    
}
