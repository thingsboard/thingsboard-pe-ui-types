import { OnChanges, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AgentService } from '@core/http/agent.service';
import { DialogService } from '@core/services/dialog.service';
import { AgentBulkActionEventsTableConfig } from './agent-bulk-action-events-table-config';
import * as i0 from "@angular/core";
export declare class AgentBulkActionEventTableComponent implements OnInit, OnChanges {
    private agentService;
    private dialogService;
    private dialog;
    private translate;
    private datePipe;
    private overlay;
    private viewContainerRef;
    private router;
    bulkActionId: string;
    tableConfig: AgentBulkActionEventsTableConfig;
    constructor(agentService: AgentService, dialogService: DialogService, dialog: MatDialog, translate: TranslateService, datePipe: DatePipe, overlay: Overlay, viewContainerRef: ViewContainerRef, router: Router);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    refresh(): void;
    private rebuild;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentBulkActionEventTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentBulkActionEventTableComponent, "tb-agent-bulk-action-event-table", never, { "bulkActionId": { "alias": "bulkActionId"; "required": false; }; }, {}, never, never, false, never>;
}
