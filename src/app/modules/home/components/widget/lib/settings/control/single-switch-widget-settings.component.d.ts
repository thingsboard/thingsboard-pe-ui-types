import { TargetDevice, WidgetSettings, WidgetSettingsComponent, widgetType } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ValueType } from '@shared/models/constants';
import * as i0 from "@angular/core";
export declare class SingleSwitchWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    get targetDevice(): TargetDevice;
    get widgetType(): widgetType;
    singleSwitchLayouts: import("@home/components/widget/lib/rpc/single-switch-widget.models").SingleSwitchLayout[];
    singleSwitchLayoutTranslationMap: Map<import("@home/components/widget/lib/rpc/single-switch-widget.models").SingleSwitchLayout, string>;
    singleSwitchLayoutImageMap: Map<import("@home/components/widget/lib/rpc/single-switch-widget.models").SingleSwitchLayout, string>;
    valueType: typeof ValueType;
    singleSwitchWidgetSettingsForm: UntypedFormGroup;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(_emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SingleSwitchWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SingleSwitchWidgetSettingsComponent, "tb-single-switch-widget-settings", never, {}, {}, never, never, false, never>;
}
