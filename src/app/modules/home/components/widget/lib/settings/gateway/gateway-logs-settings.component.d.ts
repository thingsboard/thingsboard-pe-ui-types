import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class GatewayLogsSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    gatewayLogSettingForm: FormGroup;
    constructor(store: Store<AppState>, fb: FormBuilder);
    protected settingsForm(): FormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GatewayLogsSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GatewayLogsSettingsComponent, "tb-gateway-logs-settings", never, {}, {}, never, never, false, never>;
}
