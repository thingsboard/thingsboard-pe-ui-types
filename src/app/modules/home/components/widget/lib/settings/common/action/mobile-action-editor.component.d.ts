import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActionConfig, ProvisionType, WidgetActionType, WidgetMobileActionDescriptor, WidgetMobileActionType } from '@shared/models/widget.models';
import { LocationKey, MobileActionLocationAccuracy } from '@shared/models/location.models';
import { WidgetService } from '@core/http/widget.service';
import { WidgetActionCallbacks } from '@home/components/widget/action/manage-widget-actions.component.models';
import * as i0 from "@angular/core";
export declare class MobileActionEditorComponent implements ControlValueAccessor, OnInit {
    private fb;
    private widgetService;
    private destroyRef;
    mobileActionTypes: string[];
    mobileActionTypeTranslations: Map<WidgetMobileActionType, string>;
    mobileActionType: typeof WidgetMobileActionType;
    customActionEditorCompleter: import("../../../../../../../../shared/models/ace/completion.models").TbEditorCompleter;
    mobileActionFormGroup: UntypedFormGroup;
    mobileActionTypeFormGroup: UntypedFormGroup;
    functionScopeVariables: string[];
    actionConfig: ActionConfig[];
    commonActionConfig: ActionConfig[];
    provisionTypes: ProvisionType[];
    provisionTypeTranslationMap: Map<ProvisionType, string>;
    locationAccuracies: MobileActionLocationAccuracy[];
    locationAccuracyTranslations: Map<MobileActionLocationAccuracy, string>;
    locationAccuracyHints: Map<MobileActionLocationAccuracy, string>;
    getLocationKeys: LocationKey[];
    liveLocationKeys: LocationKey[];
    protected readonly liveLocationLimits: {
        distanceFilterMeters: {
            enabled: boolean;
            defaultValue: number;
        };
        intervalSeconds: {
            enabled: boolean;
            defaultValue: number;
        };
        maxDurationSeconds: {
            enabled: boolean;
            defaultValue: number;
        };
    };
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    callbacks: WidgetActionCallbacks;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, widgetService: WidgetService, destroyRef: DestroyRef);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: WidgetMobileActionDescriptor | null): void;
    private updateModel;
    private updateMobileActionType;
    toggleLiveLocationLimit(controlName: keyof typeof this.liveLocationLimits, enabled: boolean): void;
    private addLiveLocationLimitControl;
    private defaultProcessLocationFunction;
    private addLocationTargetControls;
    getActionConfigs(): void;
    getCommonActionConfigs(): void;
    protected readonly WidgetActionType: typeof WidgetActionType;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileActionEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileActionEditorComponent, "tb-mobile-action-editor", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "callbacks": { "alias": "callbacks"; "required": false; }; }, {}, never, never, false, never>;
}
