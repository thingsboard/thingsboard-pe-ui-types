import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { CalculatedFieldEventBody, DebugEventType, EventType } from '@shared/models/event.models';
import type { AlarmRuleTableEntity } from '@home/components/alarm-rules/alarm-rules-table-config';
import * as i0 from "@angular/core";
export declare class AlarmRulesTabsComponent extends EntityTabsComponent<AlarmRuleTableEntity> {
    readonly DebugEventType: typeof DebugEventType;
    readonly EventType: typeof EventType;
    constructor();
    get debugActionDisabled(): boolean;
    onDebugEventSelected(event: CalculatedFieldEventBody): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRulesTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmRulesTabsComponent, "tb-alarm-rules-tabs", never, {}, {}, never, never, false, never>;
}
