import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HasConfirmForm } from '@core/guards/confirm-on-exit.guard';
import { MobileApplicationService } from '@core/http/mobile-application.service';
import { BadgePosition } from '@shared/models/mobile-app.models';
import { EntityType } from '@shared/models/entity-type.models';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
export declare class MobileQrCodeWidgetSettingsComponent extends PageComponent implements HasConfirmForm {
    protected store: Store<AppState>;
    private mobileAppService;
    private fb;
    private userPermissionsService;
    private wl;
    readonly badgePositionTranslationsMap: Map<BadgePosition, string>;
    readonly entityType: typeof EntityType;
    setBaseURL: boolean;
    mobileAppSettingsForm: FormGroup<{
        useSystemSettings: import("@angular/forms").FormControl<boolean>;
        useDefaultApp: import("@angular/forms").FormControl<boolean>;
        mobileAppBundleId: import("@angular/forms").FormControl<any>;
        androidEnabled: import("@angular/forms").FormControl<boolean>;
        iosEnabled: import("@angular/forms").FormControl<boolean>;
        qrCodeConfig: FormGroup<{
            showOnHomePage: import("@angular/forms").FormControl<boolean>;
            badgeEnabled: import("@angular/forms").FormControl<boolean>;
            badgePosition: import("@angular/forms").FormControl<BadgePosition>;
            qrCodeLabelEnabled: import("@angular/forms").FormControl<boolean>;
            qrCodeLabel: import("@angular/forms").FormControl<string>;
        }>;
    }>;
    private authUser;
    private mobileAppSettings;
    readonly: boolean;
    constructor(store: Store<AppState>, mobileAppService: MobileApplicationService, fb: FormBuilder, userPermissionsService: UserPermissionsService, wl: WhiteLabelingService);
    isTenantAdmin(): boolean;
    private processMobileAppSettings;
    save(): void;
    confirmForm(): FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileQrCodeWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileQrCodeWidgetSettingsComponent, "tb-mobile-qr-code-widget", never, {}, {}, never, never, false, never>;
}
