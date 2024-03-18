import { TargetDevice, WidgetSettings, WidgetSettingsComponent, widgetType } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ValueType } from '@shared/models/constants';
import * as i0 from "@angular/core";
type ButtonAppearanceType = 'checked' | 'unchecked';
export declare class ToggleButtonWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    get targetDevice(): TargetDevice;
    get widgetType(): widgetType;
    valueType: typeof ValueType;
    buttonAppearanceType: ButtonAppearanceType;
    toggleButtonWidgetSettingsForm: UntypedFormGroup;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleButtonWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleButtonWidgetSettingsComponent, "tb-toggle-button-widget-settings", never, {}, {}, never, never, false, never>;
}
export {};
