import { DatePipe } from '@angular/common';
import { ViewContainerRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AgentService } from '@core/http/agent.service';
import { DialogService } from '@core/services/dialog.service';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { AgentAppEventInfo, AgentApplication, AgentBulkActionEventStats } from '@shared/models/agent.models';
import { AbstractAgentAppEventTableConfig } from './abstract-agent-app-event-table-config';
import { EventsStatsFetcher } from './agent-events-stats-header.component';
export declare class AgentBulkActionEventsTableConfig extends AbstractAgentAppEventTableConfig<AgentAppEventInfo> implements EventsStatsFetcher {
    readonly bulkActionId: string;
    private readonly router;
    constructor(bulkActionId: string, agentService: AgentService, dialogService: DialogService, dialog: MatDialog, translate: TranslateService, datePipe: DatePipe, overlay: Overlay, viewContainerRef: ViewContainerRef, router: Router);
    fetchEventStats(): Observable<AgentBulkActionEventStats>;
    protected fetchEvents(pageLink: PageLink): Observable<PageData<AgentAppEventInfo>>;
    protected resolveApplication(e: AgentAppEventInfo): Observable<AgentApplication | null>;
    private agentUrl;
}
