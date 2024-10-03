import { UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
import { WidgetSettings, WidgetSettingsComponent } from "@shared/models/widget.models";
import { AppState } from '@core/core.state';
import { Store } from "@ngrx/store";
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class MobileAppQrCodeWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    private userPermissionsService;
    mobileAppQRCodeWidgetSettingsForm: UntypedFormGroup;
    badgePositionTranslationsMap: Map<import("@shared/models/mobile-app.models").BadgePosition, string>;
    displayConfigurationHint: boolean;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, userPermissionsService: UserPermissionsService);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    navigateToMobileAppSettings($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileAppQrCodeWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileAppQrCodeWidgetSettingsComponent, "tb-mobile-app-qr-code-widget-settings", never, {}, {}, never, never, false, never>;
}
