import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import * as i0 from "@angular/core";
export declare class MapWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    mapWidgetSettingsForm: UntypedFormGroup;
    trip: boolean;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected onWidgetConfigSet(widgetConfig: WidgetConfigComponentData): void;
    protected defaultSettings(): WidgetSettings;
    protected prepareInputSettings(settings: WidgetSettings): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected prepareOutputSettings(settings: any): WidgetSettings;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapWidgetSettingsComponent, "tb-map-widget-settings", never, {}, {}, never, never, false, never>;
}
