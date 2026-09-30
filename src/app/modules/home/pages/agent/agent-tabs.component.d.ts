import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AgentInfo } from '@shared/models/agent.models';
import { EntityTabsComponent } from '@home/components/entity/entity-tabs.component';
import * as i0 from "@angular/core";
export declare class AgentTabsComponent extends EntityTabsComponent<AgentInfo> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentTabsComponent, "tb-agent-tabs", never, {}, {}, never, never, false, never>;
}
