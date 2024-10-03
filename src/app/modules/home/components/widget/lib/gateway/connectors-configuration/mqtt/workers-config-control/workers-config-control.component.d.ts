import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { WorkersConfig } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare class WorkersConfigControlComponent implements OnDestroy, ControlValueAccessor, Validator {
    private fb;
    workersConfigFormGroup: UntypedFormGroup;
    private onChange;
    private onTouched;
    private destroy$;
    constructor(fb: FormBuilder);
    ngOnDestroy(): void;
    registerOnChange(fn: (value: string) => void): void;
    registerOnTouched(fn: () => void): void;
    writeValue(workersConfig: WorkersConfig): void;
    validate(): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkersConfigControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WorkersConfigControlComponent, "tb-workers-config-control", never, {}, {}, never, never, true, never>;
}
