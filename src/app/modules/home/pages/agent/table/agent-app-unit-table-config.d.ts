import { NgZone, ViewContainerRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AgentService } from '@core/http/agent.service';
import { AttributeService } from '@core/http/attribute.service';
import { TelemetryWebsocketService } from '@core/ws/telemetry-websocket.service';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { AgentApplicationInfo, AgentAppUnit } from '@shared/models/agent.models';
export declare class AgentAppUnitTableConfig extends EntityTableConfig<AgentAppUnit> {
    private readonly application;
    private readonly agentService;
    private readonly attributeService;
    private readonly translate;
    private readonly overlay;
    private readonly viewContainerRef;
    private readonly telemetryWsService;
    private readonly zone;
    private readonly router;
    private filter;
    private activeSubs;
    private visibleUnits;
    constructor(application: AgentApplicationInfo, agentService: AgentService, attributeService: AttributeService, translate: TranslateService, overlay: Overlay, viewContainerRef: ViewContainerRef, telemetryWsService: TelemetryWebsocketService, zone: NgZone, router: Router);
    private openLogViewer;
    private fetch;
    /**
     * Only CONTAINER units carry live `image`/`state` attributes, populated on
     * the unit entity in SERVER_SCOPE by ComposeUnitsSynchronizer. Fetch them
     * as part of the same observable chain so the data source receives rows
     * with the attributes already merged in — no mutation-after-render dance.
     */
    private enrich;
    private reconcileSubscriptions;
    private subscribeUnitAttributes;
    destroySubscriptions(): void;
    private hasActiveFilter;
    private clearFilter;
    private openFilterPanel;
}
