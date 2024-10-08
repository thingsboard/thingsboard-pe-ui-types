import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { ActionButtonLinkType } from '@shared/models/notification.models';
import * as i0 from "@angular/core";
export declare class NotificationActionButtonConfigurationComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
    private fb;
    actionTitle: string;
    sliderHint: string;
    private hideButtonTextValue;
    get hideButtonText(): boolean;
    set hideButtonText(hideButtonText: boolean);
    actionButtonConfigForm: FormGroup;
    readonly actionButtonLinkType: typeof ActionButtonLinkType;
    readonly actionButtonLinkTypes: ActionButtonLinkType[];
    readonly actionButtonLinkTypeTranslateMap: Map<ActionButtonLinkType, string>;
    private propagateChange;
    private readonly destroy$;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(obj: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationActionButtonConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationActionButtonConfigurationComponent, "tb-notification-action-button-configuration", never, { "actionTitle": { "alias": "actionTitle"; "required": false; }; "sliderHint": { "alias": "sliderHint"; "required": false; }; "hideButtonText": { "alias": "hideButtonText"; "required": false; }; }, {}, never, never, false, never>;
}
