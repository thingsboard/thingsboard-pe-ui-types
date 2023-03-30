import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { NotificationTarget } from '@shared/models/notification.models';
import * as i0 from "@angular/core";
export declare class RecipientTableHeaderComponent extends EntityTableHeaderComponent<NotificationTarget> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    createTarget($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecipientTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecipientTableHeaderComponent, "tb-recipient-table-header", never, {}, {}, never, never, false, never>;
}
