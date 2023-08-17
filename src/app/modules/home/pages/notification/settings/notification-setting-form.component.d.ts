import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { UtilsService } from '@core/services/utils.service';
import { NotificationDeliveryMethod, NotificationUserSetting } from '@shared/models/notification.models';
import * as i0 from "@angular/core";
export declare class NotificationSettingFormComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private utils;
    private fb;
    disabled: boolean;
    deliveryMethods: NotificationDeliveryMethod[];
    allowDeliveryMethods: NotificationDeliveryMethod[];
    notificationSettingsFormGroup: UntypedFormGroup;
    notificationTemplateTypeTranslateMap: Map<import("@shared/models/notification.models").NotificationType, import("@shared/models/notification.models").NotificationTemplateTypeTranslate>;
    private propagateChange;
    private valueChange$;
    constructor(utils: UtilsService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    toggleEnabled(): void;
    getChecked(deliveryMethod: NotificationDeliveryMethod): boolean;
    toggleDeliviryMethod(deliveryMethod: NotificationDeliveryMethod): void;
    writeValue(value: NotificationUserSetting): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationSettingFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationSettingFormComponent, "tb-notification-setting-form", never, { "disabled": "disabled"; "deliveryMethods": "deliveryMethods"; "allowDeliveryMethods": "allowDeliveryMethods"; }, {}, never, never, false, never>;
}
