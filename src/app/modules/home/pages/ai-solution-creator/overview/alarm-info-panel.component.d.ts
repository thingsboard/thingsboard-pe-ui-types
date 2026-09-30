import { TbPopoverComponent } from '@shared/components/popover.component';
import { SolutionDescriptorAlarm } from '@shared/models/solution-creator.models';
import * as i0 from "@angular/core";
export declare class AlarmInfoPanelComponent {
    private popover;
    alarm: SolutionDescriptorAlarm;
    protected readonly Object: ObjectConstructor;
    constructor(popover: TbPopoverComponent<AlarmInfoPanelComponent>);
    cancel(): void;
    getAlarmSeverityColor(severity: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmInfoPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmInfoPanelComponent, "tb-alarm-info-panel", never, { "alarm": { "alias": "alarm"; "required": false; }; }, {}, never, never, false, never>;
}
