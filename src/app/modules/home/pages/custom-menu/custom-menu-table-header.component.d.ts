import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '../../components/entity/entity-table-header.component';
import { CustomMenuInfo } from '@shared/models/custom-menu.models';
import * as i0 from "@angular/core";
export declare class CustomMenuTableHeaderComponent extends EntityTableHeaderComponent<CustomMenuInfo> implements OnInit {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMenuTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomMenuTableHeaderComponent, "tb-custom-menu-table-header", never, {}, {}, never, never, false, never>;
}
