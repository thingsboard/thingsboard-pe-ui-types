import { ControlValueAccessor, FormBuilder, ValidationErrors, Validator } from '@angular/forms';
import { AdvancedProcessingConfig, ProcessingType } from '@home/components/rule-node/action/timeseries-config.models';
import * as i0 from "@angular/core";
export declare class AdvancedProcessingSettingRowComponent implements ControlValueAccessor, Validator {
    private fb;
    title: string;
    processingSettingRowForm: import("@angular/forms").FormGroup<{
        type: import("@angular/forms").FormControl<ProcessingType>;
        deduplicationIntervalSecs: import("@angular/forms").FormControl<number>;
    }>;
    ProcessingType: typeof ProcessingType;
    processingStrategies: ProcessingType[];
    ProcessingTypeTranslationMap: Map<ProcessingType, string>;
    maxDeduplicateTime: number;
    private propagateChange;
    constructor(fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(value: AdvancedProcessingConfig): void;
    private updatedValidation;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdvancedProcessingSettingRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdvancedProcessingSettingRowComponent, "tb-advanced-processing-setting-row", never, { "title": { "alias": "title"; "required": false; }; }, {}, never, never, false, never>;
}
