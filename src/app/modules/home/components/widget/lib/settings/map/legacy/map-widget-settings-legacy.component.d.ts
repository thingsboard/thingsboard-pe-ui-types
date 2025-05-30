import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class MapWidgetSettingsLegacyComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    mapWidgetSettingsForm: UntypedFormGroup;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected prepareInputSettings(settings: WidgetSettings): WidgetSettings;
    protected prepareOutputSettings(settings: any): WidgetSettings;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapWidgetSettingsLegacyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapWidgetSettingsLegacyComponent, "tb-map-widget-settings-legacy", never, {}, {}, never, never, false, never>;
}
