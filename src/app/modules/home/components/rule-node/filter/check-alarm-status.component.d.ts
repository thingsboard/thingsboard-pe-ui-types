import { FormBuilder, FormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class CheckAlarmStatusComponent extends RuleNodeConfigurationComponent {
    private fb;
    alarmStatusConfigForm: FormGroup;
    searchText: string;
    constructor(fb: FormBuilder);
    protected configForm(): FormGroup;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckAlarmStatusComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckAlarmStatusComponent, "tb-filter-node-check-alarm-status-config", never, {}, {}, never, never, false, never>;
}
