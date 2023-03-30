import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Notification } from '@shared/models/notification.models';
import * as i0 from "@angular/core";
export declare class InboxTableHeaderComponent extends EntityTableHeaderComponent<Notification> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    changeUnreadOnly(unreadOnly: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InboxTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InboxTableHeaderComponent, "tb-inbox-table-header", never, {}, {}, never, never, false, never>;
}
