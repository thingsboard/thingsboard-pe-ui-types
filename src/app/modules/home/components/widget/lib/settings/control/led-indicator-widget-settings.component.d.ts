import { TargetDevice, WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetService } from '@core/http/widget.service';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import * as i0 from "@angular/core";
export declare class LedIndicatorWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private widgetService;
    private fb;
    functionScopeVariables: string[];
    get targetDevice(): TargetDevice;
    dataKeyType: typeof DataKeyType;
    ledIndicatorWidgetSettingsForm: UntypedFormGroup;
    constructor(store: Store<AppState>, widgetService: WidgetService, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LedIndicatorWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LedIndicatorWidgetSettingsComponent, "tb-led-indicator-widget-settings", never, {}, {}, never, never, false, never>;
}
