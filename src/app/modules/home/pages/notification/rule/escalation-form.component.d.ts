import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { NonConfirmedNotificationEscalation, NotificationType } from '@shared/models/notification.models';
import { EntityType } from '@shared/models/entity-type.models';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import * as i0 from "@angular/core";
export declare class EscalationFormComponent implements ControlValueAccessor, OnInit, OnDestroy, Validator {
    private fb;
    private dialog;
    disabled: boolean;
    systemEscalation: boolean;
    escalationFormGroup: FormGroup;
    entityType: typeof EntityType;
    notificationType: typeof NotificationType;
    private modelValue;
    private propagateChange;
    private propagateChangePending;
    private destroy$;
    constructor(fb: FormBuilder, dialog: MatDialog);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: NonConfirmedNotificationEscalation): void;
    createTarget($event: Event, button: MatButton): void;
    validate(c: FormControl): {
        escalation: {
            valid: boolean;
        };
    };
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<EscalationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EscalationFormComponent, "tb-escalation-form", never, { "disabled": { "alias": "disabled"; "required": false; }; "systemEscalation": { "alias": "systemEscalation"; "required": false; }; }, {}, never, never, false, never>;
}
