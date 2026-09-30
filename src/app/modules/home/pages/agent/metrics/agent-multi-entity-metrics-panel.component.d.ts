import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { AttributeService } from '@core/http/attribute.service';
import { TelemetryWebsocketService } from '@core/ws/telemetry-websocket.service';
import { AgentAppUnitType } from '@shared/models/agent.models';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export interface MetricsEntityRef {
    entityId: EntityId;
    label: string;
    /** When set, scopes the WS subscription + history fetch to just the keys
     *  that metric type carries:
     *    CONTAINER → cpuPercent + memoryBytes
     *    VOLUME    → sizeBytes
     *    NETWORK   → entity is skipped entirely (no charted telemetry today)
     *  Undefined (e.g. AgentApp entities on the agent applications drawer)
     *  defaults to cpu + memory. */
    type?: AgentAppUnitType;
}
export declare class AgentMultiEntityMetricsPanelComponent implements AfterViewInit, OnChanges, OnDestroy {
    private attributeService;
    private telemetryWsService;
    private zone;
    entities: MetricsEntityRef[];
    title: string;
    closeable: boolean;
    /** When set, the Storage chart shows two lines (host disk used + limit) for
     *  this entity instead of stacking per-entity volume sizes. Use on the agent
     *  applications drawer where storage is host-wide, not per-app. */
    hostDiskEntityId: EntityId | null;
    closePanel: EventEmitter<void>;
    panelRootRef: ElementRef<HTMLDivElement>;
    cpuChartRef: ElementRef<HTMLDivElement>;
    memChartRef: ElementRef<HTMLDivElement>;
    storageChartRef: ElementRef<HTMLDivElement>;
    private destroy$;
    private cpuChart;
    private memChart;
    private storageChart;
    private runtime;
    private viewReady;
    private resizeObserver;
    private hostDiskSub;
    private hostDiskUsedPoints;
    private hostDiskLimit;
    private hostDiskHistoryLoaded;
    constructor(attributeService: AttributeService, telemetryWsService: TelemetryWebsocketService, zone: NgZone);
    ngAfterViewInit(): void;
    ngOnChanges(c: SimpleChanges): void;
    ngOnDestroy(): void;
    onCloseClick(): void;
    private initCharts;
    private installResize;
    private reconcile;
    private setupHostDisk;
    private onHostDiskSnapshot;
    private loadHistory;
    private onSnapshot;
    private apply;
    private lineSeries;
    private series;
    private baseOption;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentMultiEntityMetricsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentMultiEntityMetricsPanelComponent, "tb-agent-multi-entity-metrics-panel", never, { "entities": { "alias": "entities"; "required": false; }; "title": { "alias": "title"; "required": false; }; "closeable": { "alias": "closeable"; "required": false; }; "hostDiskEntityId": { "alias": "hostDiskEntityId"; "required": false; }; }, { "closePanel": "closePanel"; }, never, never, false, never>;
}
