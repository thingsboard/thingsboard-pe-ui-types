import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { OnInit } from '@angular/core';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { TargetDevice, TargetDeviceType } from '@shared/models/widget.models';
import { EntityType } from '@shared/models/entity-type.models';
import { IAliasController } from '@core/api/widget-api.models';
import { EntityAliasSelectCallbacks } from '@home/components/alias/entity-alias-select.component.models';
import * as i0 from "@angular/core";
export declare class TargetDeviceComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private utils;
    translate: TranslateService;
    private widgetConfigComponent;
    get aliasController(): IAliasController;
    get entityAliasSelectCallbacks(): EntityAliasSelectCallbacks;
    get targetDeviceOptional(): boolean;
    targetDeviceType: typeof TargetDeviceType;
    entityType: typeof EntityType;
    disabled: boolean;
    widgetEditMode: boolean;
    targetDeviceFormGroup: UntypedFormGroup;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, utils: UtilsService, translate: TranslateService, widgetConfigComponent: WidgetConfigComponent);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
    writeValue(targetDevice?: TargetDevice): void;
    validate(c: UntypedFormControl): {
        targetDevice: {
            valid: boolean;
        };
    };
    private targetDeviceUpdated;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<TargetDeviceComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TargetDeviceComponent, "tb-target-device", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
