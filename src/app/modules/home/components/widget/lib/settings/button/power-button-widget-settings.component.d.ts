import { TargetDevice, WidgetSettings, WidgetSettingsComponent, widgetType } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ValueType } from '@shared/models/constants';
import * as i0 from "@angular/core";
export declare class PowerButtonWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    get targetDevice(): TargetDevice;
    get widgetType(): widgetType;
    powerButtonLayouts: import("@home/components/widget/lib/rpc/power-button-widget.models").PowerButtonLayout[];
    powerButtonLayoutTranslationMap: Map<import("@home/components/widget/lib/rpc/power-button-widget.models").PowerButtonLayout, string>;
    powerButtonLayoutImageMap: Map<import("@home/components/widget/lib/rpc/power-button-widget.models").PowerButtonLayout, string>;
    valueType: typeof ValueType;
    powerButtonWidgetSettingsForm: UntypedFormGroup;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PowerButtonWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PowerButtonWidgetSettingsComponent, "tb-power-button-widget-settings", never, {}, {}, never, never, false, never>;
}
