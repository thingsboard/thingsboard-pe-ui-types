import { OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AgentService } from '@core/http/agent.service';
import { DialogService } from '@core/services/dialog.service';
import { AgentBulkActionEventsTableConfig } from '@home/pages/agent/table/agent-bulk-action-events-table-config';
import * as i0 from "@angular/core";
export declare class AgentBulkActionEventsPageComponent implements OnInit {
    private route;
    private agentService;
    private dialogService;
    private dialog;
    private translate;
    private datePipe;
    private overlay;
    private viewContainerRef;
    private router;
    tableConfig: AgentBulkActionEventsTableConfig;
    constructor(route: ActivatedRoute, agentService: AgentService, dialogService: DialogService, dialog: MatDialog, translate: TranslateService, datePipe: DatePipe, overlay: Overlay, viewContainerRef: ViewContainerRef, router: Router);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentBulkActionEventsPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentBulkActionEventsPageComponent, "tb-agent-bulk-action-events-page", never, {}, {}, never, never, false, never>;
}
