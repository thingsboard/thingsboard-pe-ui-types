import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@app/shared/models/rule-node.models';
import { AggregationType } from '@app/shared/models/time/time.models';
import { FetchMode, SamplingOrder, TimeUnit } from '../rule-node-config.models';
import * as i0 from "@angular/core";
export declare class GetTelemetryFromDatabaseConfigComponent extends RuleNodeConfigurationComponent {
    translate: TranslateService;
    private fb;
    getTelemetryFromDatabaseConfigForm: FormGroup;
    aggregationTypes: typeof AggregationType;
    aggregations: Array<AggregationType>;
    aggregationTypesTranslations: Map<AggregationType, string>;
    fetchMode: typeof FetchMode;
    samplingOrders: Array<SamplingOrder>;
    samplingOrdersTranslate: Map<SamplingOrder, string>;
    timeUnits: Array<TimeUnit>;
    timeUnitsTranslationMap: Map<TimeUnit, string>;
    deduplicationStrategiesHintTranslations: Map<FetchMode, string>;
    headerOptions: any[];
    timeUnitMap: {
        MILLISECONDS: number;
        SECONDS: number;
        MINUTES: number;
        HOURS: number;
        DAYS: number;
    };
    constructor(translate: TranslateService, fb: FormBuilder);
    protected configForm(): FormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    private intervalValidator;
    protected validatorTriggers(): string[];
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected updateValidators(emitEvent: boolean): void;
    defaultPaddingEnable(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<GetTelemetryFromDatabaseConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GetTelemetryFromDatabaseConfigComponent, "tb-enrichment-node-get-telemetry-from-database", never, {}, {}, never, never, false, never>;
}
