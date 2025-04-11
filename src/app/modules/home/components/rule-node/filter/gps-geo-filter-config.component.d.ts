import { FormBuilder, FormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { PerimeterType, RangeUnit } from '../rule-node-config.models';
import * as i0 from "@angular/core";
export declare class GpsGeoFilterConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    geoFilterConfigForm: FormGroup;
    perimeterType: typeof PerimeterType;
    perimeterTypes: Array<PerimeterType>;
    perimeterTypeTranslationMap: Map<PerimeterType, string>;
    rangeUnits: Array<RangeUnit>;
    rangeUnitTranslationMap: Map<RangeUnit, string>;
    defaultPaddingEnable: boolean;
    constructor(fb: FormBuilder);
    protected configForm(): FormGroup;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GpsGeoFilterConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GpsGeoFilterConfigComponent, "tb-filter-node-gps-geofencing-config", never, {}, {}, never, never, false, never>;
}
