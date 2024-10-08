import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AlarmCondition } from '@shared/models/device.models';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export declare class AlarmRuleConditionComponent implements ControlValueAccessor, OnInit, Validator {
    private dialog;
    private fb;
    private translate;
    disabled: boolean;
    deviceProfileId: EntityId;
    alarmRuleConditionFormGroup: UntypedFormGroup;
    specText: string;
    private modelValue;
    private propagateChange;
    constructor(dialog: MatDialog, fb: UntypedFormBuilder, translate: TranslateService);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: AlarmCondition): void;
    conditionSet(): number;
    validate(c: UntypedFormControl): {
        alarmRuleCondition: {
            valid: boolean;
        };
    };
    openFilterDialog($event: Event): void;
    private updateConditionInfo;
    private updateSpecText;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRuleConditionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmRuleConditionComponent, "tb-alarm-rule-condition", never, { "disabled": { "alias": "disabled"; "required": false; }; "deviceProfileId": { "alias": "deviceProfileId"; "required": false; }; }, {}, never, never, false, never>;
}
