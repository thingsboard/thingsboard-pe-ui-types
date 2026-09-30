import { ViewContainerRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AgentService } from '@core/http/agent.service';
import { DialogService } from '@core/services/dialog.service';
import { EntityColumn, EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { AgentAppEvent, AgentApplication } from '@shared/models/agent.models';
import { AgentAppEventFilterValue } from './agent-app-event-filter-panel.component';
/**
 * Shared shape of the agent event tables (per agent, per application, per bulk action):
 * action / execution / status / time columns, the cancel-or-show-error cell action,
 * the filter header actions and the row click that opens the progress dialog.
 * Subclasses add their leading columns and say how events are fetched and how the
 * application behind an event is resolved.
 */
export declare abstract class AbstractAgentAppEventTableConfig<E extends AgentAppEvent> extends EntityTableConfig<E> {
    protected readonly agentService: AgentService;
    protected readonly dialogService: DialogService;
    protected readonly dialog: MatDialog;
    protected readonly translate: TranslateService;
    protected readonly datePipe: DatePipe;
    protected readonly overlay: Overlay;
    protected readonly viewContainerRef: ViewContainerRef;
    protected filter: AgentAppEventFilterValue;
    protected constructor(agentService: AgentService, dialogService: DialogService, dialog: MatDialog, translate: TranslateService, datePipe: DatePipe, overlay: Overlay, viewContainerRef: ViewContainerRef, noEntitiesKey: string);
    protected abstract fetchEvents(pageLink: PageLink): Observable<PageData<E>>;
    protected abstract resolveApplication(e: E): Observable<AgentApplication | null>;
    /**
     * In-flight rows carry a marker span in the status cell; the wrapping components'
     * SCSS uses `:has()` on it to paint the whole row without touching the shared table.
     */
    protected eventColumns(): Array<EntityColumn<E>>;
    protected applicationCell(e: E & {
        applicationName?: string;
    }): string;
    protected applicationById(e: E): Observable<AgentApplication | null>;
    protected canCancel(e: E): boolean;
    protected isFailure(e: E): boolean;
    protected isErrorRow(e: E): boolean;
    private translateKey;
    private onRowClick;
    private openProgress;
    private cancelEvent;
    private showEventError;
    private hasActiveFilter;
    private clearFilter;
    private openFilterPanel;
}
