import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BasicWidgetConfigComponent } from '@home/components/widget/config/widget-config.component.models';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class MobileAppQrCodeBasicConfigComponent extends BasicWidgetConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    private fb;
    private userPermissionsService;
    mobileAppQrCodeWidgetConfigForm: UntypedFormGroup;
    badgePositionTranslationsMap: Map<import("@app/shared/models/mobile-app.models").BadgePosition, string>;
    displayConfigurationHint: boolean;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, fb: UntypedFormBuilder, userPermissionsService: UserPermissionsService);
    protected configForm(): UntypedFormGroup;
    protected setupConfig(widgetConfig: WidgetConfigComponentData): void;
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    private getCardButtons;
    private setCardButtons;
    navigateToMobileAppSettings($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileAppQrCodeBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileAppQrCodeBasicConfigComponent, "tb-mobile-app-qr-code-basic-config", never, {}, {}, never, never, false, never>;
}
