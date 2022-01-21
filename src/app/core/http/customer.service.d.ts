import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { Customer, ShortCustomerInfo } from '@shared/models/customer.model';
import * as i0 from "@angular/core";
export declare class CustomerService {
    private http;
    constructor(http: HttpClient);
    getCustomers(pageLink: PageLink, config?: RequestConfig): Observable<PageData<Customer>>;
    getCustomer(customerId: string, config?: RequestConfig): Observable<Customer>;
    saveCustomer(customer: Customer, entityGroupId?: string, config?: RequestConfig): Observable<Customer>;
    deleteCustomer(customerId: string, config?: RequestConfig): Observable<Object>;
    getCustomersByIds(customerIds: Array<string>, config?: RequestConfig): Observable<Array<Customer>>;
    getUserCustomers(pageLink: PageLink, config?: RequestConfig): Observable<PageData<Customer>>;
    getShortCustomerInfo(customerId: string, config?: RequestConfig): Observable<ShortCustomerInfo>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomerService>;
}
