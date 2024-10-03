import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DomainInfo } from '@shared/models/oauth2.models';
import * as i0 from "@angular/core";
export declare class DomainTableHeaderComponent extends EntityTableHeaderComponent<DomainInfo> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    static ɵfac: i0.ɵɵFactoryDeclaration<DomainTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DomainTableHeaderComponent, "tb-domain-table-header", never, {}, {}, never, never, false, never>;
}
