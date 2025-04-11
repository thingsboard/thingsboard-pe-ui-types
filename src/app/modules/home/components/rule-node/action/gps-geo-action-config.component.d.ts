import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import { PerimeterType, RangeUnit, TimeUnit } from '../rule-node-config.models';
import * as i0 from "@angular/core";
export declare class GpsGeoActionConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    geoActionConfigForm: UntypedFormGroup;
    perimeterType: typeof PerimeterType;
    perimeterTypes: string[];
    perimeterTypeTranslationMap: Map<PerimeterType, string>;
    rangeUnits: string[];
    rangeUnitTranslationMap: Map<RangeUnit, string>;
    presenceMonitoringStrategies: Map<import("../rule-node-config.models").PresenceMonitoringStrategy, import("../rule-node-config.models").PresenceMonitoringStrategyData>;
    presenceMonitoringStrategyKeys: import("../rule-node-config.models").PresenceMonitoringStrategy[];
    timeUnits: string[];
    timeUnitsTranslationMap: Map<TimeUnit, string>;
    defaultPaddingEnable: boolean;
    constructor(fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GpsGeoActionConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GpsGeoActionConfigComponent, "tb-action-node-gps-geofencing-config", never, {}, {}, never, never, false, never>;
}
