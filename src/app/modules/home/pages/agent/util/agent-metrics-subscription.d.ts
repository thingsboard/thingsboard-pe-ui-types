import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { TelemetryWebsocketService } from '@core/ws/telemetry-websocket.service';
import { EntityId } from '@shared/models/id/entity-id';
import { MetricsSnapshot } from './agent-metrics';
export declare class AgentMetricsSubscription {
    private telemetryWsService;
    private zone;
    private entitySub;
    private agentSub;
    private readonly entityValues$;
    private readonly agentValues$;
    readonly snapshot$: Observable<MetricsSnapshot>;
    constructor(telemetryWsService: TelemetryWebsocketService, zone: NgZone);
    private buildSnapshot;
    subscribe(entityId: EntityId, agentId: EntityId | null, entityKeys?: string[], agentKeys?: string[]): void;
    tearDown(): void;
    static empty(): MetricsSnapshot;
}
