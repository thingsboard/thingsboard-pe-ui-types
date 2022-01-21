import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { AuditLog, AuditLogMode } from '@shared/models/audit-log.models';
import { AuditLogService } from '@core/http/audit-log.service';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TimePageLink } from '@shared/models/page/page-link';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { EntityId } from '@shared/models/id/entity-id';
import { UserId } from '@shared/models/id/user-id';
import { CustomerId } from '@shared/models/id/customer-id';
export declare class AuditLogTableConfig extends EntityTableConfig<AuditLog, TimePageLink> {
    private auditLogService;
    private translate;
    private datePipe;
    private dialog;
    private auditLogMode;
    entityId: EntityId;
    userId: UserId;
    customerId: CustomerId;
    constructor(auditLogService: AuditLogService, translate: TranslateService, datePipe: DatePipe, dialog: MatDialog, auditLogMode?: AuditLogMode, entityId?: EntityId, userId?: UserId, customerId?: CustomerId, updateOnInit?: boolean, pageMode?: boolean);
    fetchAuditLogs(pageLink: TimePageLink): Observable<PageData<AuditLog>>;
    showAuditLogDetails(entity: AuditLog): void;
}
