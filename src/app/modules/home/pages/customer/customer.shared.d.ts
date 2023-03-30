import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { CustomerService } from '@core/http/customer.service';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class CustomerTitleResolver implements Resolve<string> {
    private customerService;
    constructor(customerService: CustomerService);
    resolve(route: ActivatedRouteSnapshot): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerTitleResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomerTitleResolver>;
}
