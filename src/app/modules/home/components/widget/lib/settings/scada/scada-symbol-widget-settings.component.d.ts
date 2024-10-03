import { TargetDevice, WidgetSettings, WidgetSettingsComponent, widgetType } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class ScadaSymbolWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    get targetDevice(): TargetDevice;
    get widgetType(): widgetType;
    scadaSymbolWidgetSettingsForm: UntypedFormGroup;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScadaSymbolWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScadaSymbolWidgetSettingsComponent, "tb-scada-symbol-widget-settings", never, {}, {}, never, never, false, never>;
}
