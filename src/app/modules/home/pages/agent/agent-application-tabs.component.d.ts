import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AgentApplicationInfo } from '@shared/models/agent.models';
import { EntityTabsComponent } from '@home/components/entity/entity-tabs.component';
import { AttributeScope, LatestTelemetry } from '@shared/models/telemetry/telemetry.models';
import * as i0 from "@angular/core";
export declare class AgentApplicationTabsComponent extends EntityTabsComponent<AgentApplicationInfo> {
    protected store: Store<AppState>;
    readonly attributeScopes: typeof AttributeScope;
    readonly latestTelemetryTypes: typeof LatestTelemetry;
    constructor(store: Store<AppState>);
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentApplicationTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentApplicationTabsComponent, "tb-agent-application-tabs", never, {}, {}, never, never, false, never>;
}
