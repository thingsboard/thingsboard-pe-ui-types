import { HttpClient } from '@angular/common/http';
import { CustomMenu } from '@shared/models/custom-menu.models';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class CustomMenuService {
    private http;
    private customMenu;
    private customMenuChanged;
    customMenuChanged$: Observable<CustomMenu>;
    constructor(http: HttpClient);
    getCustomMenu(): CustomMenu;
    loadCustomMenu(): Observable<CustomMenu>;
    getCurrentCustomMenu(): Observable<CustomMenu>;
    saveCustomMenu(customMenu: CustomMenu): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMenuService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomMenuService>;
}
