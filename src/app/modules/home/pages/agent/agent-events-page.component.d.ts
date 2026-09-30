import { OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AgentService } from '@core/http/agent.service';
import { DialogService } from '@core/services/dialog.service';
import { AgentEventsTableConfig } from '@home/pages/agent/table/agent-events-table-config';
import * as i0 from "@angular/core";
export declare class AgentEventsPageComponent implements OnInit {
    private route;
    private agentService;
    private dialogService;
    private dialog;
    private translate;
    private datePipe;
    private overlay;
    private viewContainerRef;
    tableConfig: AgentEventsTableConfig;
    constructor(route: ActivatedRoute, agentService: AgentService, dialogService: DialogService, dialog: MatDialog, translate: TranslateService, datePipe: DatePipe, overlay: Overlay, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    private buildConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentEventsPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentEventsPageComponent, "tb-agent-events-page", never, {}, {}, never, never, false, never>;
}
