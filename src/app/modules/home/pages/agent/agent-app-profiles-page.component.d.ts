import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { AgentAppProfile } from '@shared/models/agent.models';
import * as i0 from "@angular/core";
export declare class AgentAppProfilesPageComponent implements OnInit, OnDestroy {
    private route;
    private entitiesTable;
    entitiesTableConfig: EntityTableConfig<AgentAppProfile> | null;
    readonly tableDataFetched$: Subject<void>;
    get detailsOpen(): boolean;
    private readonly destroy$;
    private wrappedConfig;
    private originalFetchFunction;
    constructor(route: ActivatedRoute);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private unwrapFetchFunction;
    onProfileCreated(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentAppProfilesPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentAppProfilesPageComponent, "tb-agent-app-profiles-page", never, {}, {}, never, never, false, never>;
}
