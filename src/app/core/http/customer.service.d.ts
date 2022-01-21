import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { Customer } from '@shared/models/customer.model';
import * as i0 from "@angular/core";
export declare class CustomerService {
    private http;
    constructor(http: HttpClient);
    getCustomers(pageLink: PageLink, config?: RequestConfig): Observable<PageData<Customer>>;
    getCustomer(customerId: string, config?: RequestConfig): Observable<Customer>;
    saveCustomer(customer: Customer, config?: RequestConfig): Observable<Customer>;
    deleteCustomer(customerId: string, config?: RequestConfig): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomerService>;
}
