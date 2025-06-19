import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { SecretStorage } from '@shared/models/secret-storage.models';
import * as i0 from "@angular/core";
export declare class SecretStorageTableHeaderComponent extends EntityTableHeaderComponent<SecretStorage> {
    protected store: Store<AppState>;
    width: string;
    constructor(store: Store<AppState>);
    static ɵfac: i0.ɵɵFactoryDeclaration<SecretStorageTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SecretStorageTableHeaderComponent, "tb-secret-storage-table-header", never, {}, {}, never, never, false, never>;
}
