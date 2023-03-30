import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { NotificationRule } from '@shared/models/notification.models';
import * as i0 from "@angular/core";
export declare class RuleTableHeaderComponent extends EntityTableHeaderComponent<NotificationRule> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    createTarget($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleTableHeaderComponent, "tb-rule-table-header", never, {}, {}, never, never, false, never>;
}
