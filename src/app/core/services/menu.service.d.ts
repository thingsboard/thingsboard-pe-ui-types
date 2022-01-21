import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../core.state';
import { HomeSection, MenuSection } from '@core/services/menu.models';
import { Observable, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class MenuService {
    private store;
    private authService;
    menuSections$: Subject<Array<MenuSection>>;
    homeSections$: Subject<Array<HomeSection>>;
    constructor(store: Store<AppState>, authService: AuthService);
    private buildMenu;
    private buildSysAdminMenu;
    private buildSysAdminHome;
    private buildTenantAdminMenu;
    private buildTenantAdminHome;
    private buildCustomerUserMenu;
    private buildCustomerUserHome;
    menuSections(): Observable<Array<MenuSection>>;
    homeSections(): Observable<Array<HomeSection>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MenuService>;
}
