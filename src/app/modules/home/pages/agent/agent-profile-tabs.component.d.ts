import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AgentProfileInfo } from '@shared/models/agent.models';
import { EntityTabsComponent } from '@home/components/entity/entity-tabs.component';
import * as i0 from "@angular/core";
export declare class AgentProfileTabsComponent extends EntityTabsComponent<AgentProfileInfo> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AgentProfileTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AgentProfileTabsComponent, "tb-agent-profile-tabs", never, {}, {}, never, never, false, never>;
}
