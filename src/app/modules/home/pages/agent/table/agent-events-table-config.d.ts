import { DatePipe } from '@angular/common';
import { ViewContainerRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AgentService } from '@core/http/agent.service';
import { DialogService } from '@core/services/dialog.service';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { AgentAppEventInfo, AgentApplication, AgentInfo } from '@shared/models/agent.models';
import { AbstractAgentAppEventTableConfig } from './abstract-agent-app-event-table-config';
export declare class AgentEventsTableConfig extends AbstractAgentAppEventTableConfig<AgentAppEventInfo> {
    private readonly agentId;
    private readonly agentScopeBasePath;
    constructor(agentId: string, agent: AgentInfo | null, agentService: AgentService, dialogService: DialogService, dialog: MatDialog, translate: TranslateService, datePipe: DatePipe, overlay: Overlay, viewContainerRef: ViewContainerRef, agentScopeBasePath: string);
    protected fetchEvents(pageLink: PageLink): Observable<PageData<AgentAppEventInfo>>;
    protected resolveApplication(e: AgentAppEventInfo): Observable<AgentApplication | null>;
}
