import { ChangeDetectorRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { MatDrawer } from '@angular/material/sidenav';
import { TelemetryWebsocketService } from '@core/ws/telemetry-websocket.service';
import { AgentService } from '@core/http/agent.service';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { AgentId } from '@shared/models/id/agent-id';
import { MetricsSnapshot } from '@home/pages/agent/util/agent-metrics';
import { MetricsEntityRef } from './agent-multi-entity-metrics-panel.component';
import { MatDialog } from '@angular/material/dialog';
import { AgentApplicationInfo } from '@shared/models/agent.models';
import * as i0 from "@angular/core";
export declare class AgentApplicationsPageComponent implements OnInit, OnDestroy {
    private route;
    private router;
    private telemetryWsService;
    private zone;
    private cdr;
    private agentService;
    private dialog;
    private translate;
    private datePipe;
    chartsDrawer: MatDrawer;
    entitiesTableConfig: EntityTableConfig<AgentApplicationInfo> | null;
    agentEntityId: AgentId | null;
    snapshot: MetricsSnapshot;
    agentVersion: string | null;
    agentName: string;
    upgradeAvailable: boolean;
    upgradeTargetImageRef: string;
    /** Just the tag, so the chip reads "Upgrade to 4.4.1" rather than repeating the whole reference. */
    get upgradeTargetTag(): string;
    chartsOpen: boolean;
    entities: MetricsEntityRef[];
    errorCount: number;
    errorTooltip: string;
    private destroy$;
    private wrappedConfig;
    private originalFetchFunction;
    private subscription;
    private loadedAppsForAgentId;
    constructor(route: ActivatedRoute, router: Router, telemetryWsService: TelemetryWebsocketService, zone: NgZone, cdr: ChangeDetectorRef, agentService: AgentService, dialog: MatDialog, translate: TranslateService, datePipe: DatePipe);
    ngOnInit(): void;
    /**
     * The reported image reference doubles as the agent's version, and the upgrade target is resolved
     * server-side onto the same info object, so the strip can show what is running and whether anything
     * newer applies from a single read.
     */
    private fetchUpgradeState;
    onUpgradeAgent($event: Event): void;
    private fetchErrorEvents;
    goToErrorEvents(): void;
    private fetchApplications;
    ngOnDestroy(): void;
    private unwrapFetchFunction;
    toggleCharts(): void;
    closeCharts(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentApplicationsPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentApplicationsPageComponent, "tb-agent-applications-page", never, {}, {}, never, never, false, never>;
}
