import { AppState } from '@app/core/public-api';
import { AuditLog, AuditLogFilter, TimePageLink } from '@app/shared/public-api';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { Store } from '@ngrx/store';
import * as i0 from "@angular/core";
export declare class AuditLogHeaderComponent extends EntityTableHeaderComponent<AuditLog, TimePageLink> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    auditLogFiltersChanged(auditLogFilter: AuditLogFilter): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuditLogHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuditLogHeaderComponent, "tb-audit-log-header", never, {}, {}, never, never, false, never>;
}
