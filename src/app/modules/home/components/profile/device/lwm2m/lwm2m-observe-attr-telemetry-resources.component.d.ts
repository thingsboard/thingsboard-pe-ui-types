import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { ResourceLwM2M } from '@home/components/profile/device/lwm2m/lwm2m-profile-config.models';
import { GtSmBreakpointAwareDirective } from '@shared/components/gt-sm-breakpoint-aware.directive';
import * as i0 from "@angular/core";
export declare class Lwm2mObserveAttrTelemetryResourcesComponent extends GtSmBreakpointAwareDirective implements ControlValueAccessor, Validator {
    private fb;
    resourcesFormGroup: UntypedFormGroup;
    private destroyRef;
    disabled: boolean;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    registerOnTouched(fn: any): void;
    registerOnChange(fn: any): void;
    writeValue(value: ResourceLwM2M[]): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    get resourcesFormArray(): UntypedFormArray;
    getNameResourceLwm2m(resourceLwM2M: ResourceLwM2M): string;
    private updatedResources;
    private createdResourceFormGroup;
    private updateModel;
    isDisabledObserve(index: number): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<Lwm2mObserveAttrTelemetryResourcesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Lwm2mObserveAttrTelemetryResourcesComponent, "tb-profile-lwm2m-observe-attr-telemetry-resource", never, { "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, never, false, never>;
}
