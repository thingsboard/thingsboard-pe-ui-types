import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, UntypedFormGroup, ValidationErrors } from '@angular/forms';
import { ReportStrategyConfig, ReportStrategyDefaultValue, ReportStrategyType } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare class ReportStrategyComponent implements ControlValueAccessor, OnDestroy {
    private fb;
    isExpansionMode: boolean;
    defaultValue: ReportStrategyDefaultValue;
    reportStrategyFormGroup: UntypedFormGroup;
    showStrategyControl: FormControl<boolean>;
    readonly reportStrategyTypes: ReportStrategyType[];
    readonly ReportTypeTranslateMap: Map<ReportStrategyType, string>;
    readonly ReportStrategyType: typeof ReportStrategyType;
    private onChange;
    private onTouched;
    private destroy$;
    constructor(fb: FormBuilder);
    ngOnDestroy(): void;
    writeValue(reportStrategyConfig: ReportStrategyConfig): void;
    validate(): ValidationErrors | null;
    registerOnChange(fn: (value: ReportStrategyConfig) => void): void;
    registerOnTouched(fn: () => void): void;
    private observeStrategyFormChange;
    private observeStrategyToggle;
    private onTypeChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportStrategyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportStrategyComponent, "tb-report-strategy", never, { "isExpansionMode": "isExpansionMode"; "defaultValue": "defaultValue"; }, {}, never, never, true, never>;
}
