import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { Integration, IntegrationInfo } from '@shared/models/integration.models';
import { PageLink } from '@shared/models/page/page-link';
import { DebugEventType, EventType } from '@shared/models/event.models';
import * as i0 from "@angular/core";
export declare class IntegrationTabsComponent extends EntityTabsComponent<Integration, PageLink, IntegrationInfo> {
    protected store: Store<AppState>;
    private defaultEventTypeValue;
    get defaultEventType(): DebugEventType | EventType;
    set defaultEventType(value: DebugEventType | EventType);
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegrationTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IntegrationTabsComponent, "tb-integration-tabs", never, { "defaultEventType": "defaultEventType"; }, {}, never, never>;
}
