import { OnChanges, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, ValidationErrors, Validator } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { EntityType } from '@shared/models/entity-type.models';
import { CMAssigneeType, CMScope } from '@app/shared/models/custom-menu.models';
import { GroupPermission } from '@shared/models/group-permission.models';
import { CaptchaVersion, MobileSelfRegistrationParams } from '@shared/models/self-register.models';
import { TranslateService } from '@ngx-translate/core';
import { NotificationTargetId } from '@shared/models/id/notification-target-id';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class MobileSelfRegistrationComponent implements ControlValueAccessor, Validator, OnChanges {
    private fb;
    private popoverService;
    private renderer;
    private viewContainerRef;
    private translate;
    private dialog;
    androidApp: boolean;
    iOSApp: boolean;
    selfRegistrationForm: import("@angular/forms").FormGroup<{
        enabled: import("@angular/forms").FormControl<boolean>;
        title: import("@angular/forms").FormControl<string>;
        notificationRecipient: import("@angular/forms").FormControl<NotificationTargetId>;
        redirect: import("@angular/forms").FormGroup<{
            scheme: import("@angular/forms").FormControl<string>;
            host: import("@angular/forms").FormControl<string>;
        }>;
        signUpFields: import("@angular/forms").FormControl<any>;
        captcha: import("@angular/forms").FormGroup<{
            version: import("@angular/forms").FormControl<CaptchaVersion>;
            siteKey: import("@angular/forms").FormControl<string>;
            secretKey: import("@angular/forms").FormControl<string>;
            logActionName: import("@angular/forms").FormControl<string>;
            projectId: import("@angular/forms").FormControl<string>;
            androidKey: import("@angular/forms").FormControl<string>;
            iosKey: import("@angular/forms").FormControl<string>;
            serviceAccountCredentials: import("@angular/forms").FormControl<string>;
            serviceAccountCredentialsFileName: import("@angular/forms").FormControl<string>;
        }>;
        showPrivacyPolicy: import("@angular/forms").FormControl<boolean>;
        showTermsOfUse: import("@angular/forms").FormControl<boolean>;
        termsOfUse: import("@angular/forms").FormControl<string>;
        privacyPolicy: import("@angular/forms").FormControl<string>;
        permissions: import("@angular/forms").FormControl<GroupPermission[]>;
        customerGroupId: import("@angular/forms").FormControl<any>;
        customerTitlePrefix: import("@angular/forms").FormControl<string>;
        customMenuId: import("@angular/forms").FormControl<any>;
        defaultDashboard: import("@angular/forms").FormGroup<{
            id: import("@angular/forms").FormControl<any>;
            fullscreen: import("@angular/forms").FormControl<boolean>;
        }>;
        homeDashboard: import("@angular/forms").FormGroup<{
            id: import("@angular/forms").FormControl<any>;
            hideToolbar: import("@angular/forms").FormControl<boolean>;
        }>;
    }>;
    EntityType: typeof EntityType;
    CMScope: typeof CMScope;
    CMAssigneeType: typeof CMAssigneeType;
    private propagateChange;
    constructor(fb: FormBuilder, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, translate: TranslateService, dialog: MatDialog);
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(params: MobileSelfRegistrationParams): void;
    validate(): ValidationErrors | null;
    editPolicy($event: Event, matButton: MatButton, isPrivacy?: boolean): void;
    createTarget(name?: string): void;
    private updateModel;
    private updatedCaptchaDisabledState;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileSelfRegistrationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileSelfRegistrationComponent, "tb-mobile-self-registration", never, { "androidApp": { "alias": "androidApp"; "required": false; }; "iOSApp": { "alias": "iOSApp"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_androidApp: unknown;
    static ngAcceptInputType_iOSApp: unknown;
}
