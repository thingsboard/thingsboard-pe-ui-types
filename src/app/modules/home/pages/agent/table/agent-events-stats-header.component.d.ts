import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { AgentAppEvent, AgentAppEventInfo, AgentBulkActionEventStats } from '@shared/models/agent.models';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import * as i0 from "@angular/core";
/**
 * Any table config that wants to render the events stats header implements this
 * by exposing a fetch returning the per-status event counts.
 */
export interface EventsStatsFetcher {
    fetchEventStats(): Observable<AgentBulkActionEventStats>;
}
interface StatusCounts {
    total: number;
    done: number;
    error: number;
    running: number;
    pending: number;
}
type AnyEvent = AgentAppEvent | AgentAppEventInfo;
export declare class AgentEventsStatsHeaderComponent extends EntityTableHeaderComponent<AnyEvent> implements OnInit, OnDestroy {
    private cd;
    counts: StatusCounts;
    private fetcher;
    private pollSub;
    private readonly destroy$;
    constructor(cd: ChangeDetectorRef);
    ngOnDestroy(): void;
    private stopPolling;
    get successPct(): number;
    get donePct(): number;
    get errorPct(): number;
    get runningPct(): number;
    private pctOf;
    protected setEntitiesTableConfig(cfg: EntityTableConfig<AnyEvent>): void;
    private loadCounts;
    private allEventsTerminal;
    private computeCounts;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentEventsStatsHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentEventsStatsHeaderComponent, "tb-agent-events-stats-header", never, {}, {}, never, never, false, never>;
}
export {};
