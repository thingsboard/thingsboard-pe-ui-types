import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { AppState } from '@core/core.state';
import { Store } from '@ngrx/store';
import * as i0 from "@angular/core";
export declare class PhotoCameraInputWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    photoCameraInputWidgetSettingsForm: UntypedFormGroup;
    predefinedValues: string[];
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected prepareInputSettings(settings: WidgetSettings): WidgetSettings;
    protected prepareOutputSettings(settings: WidgetSettings): WidgetSettings;
    static ɵfac: i0.ɵɵFactoryDeclaration<PhotoCameraInputWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PhotoCameraInputWidgetSettingsComponent, "tb-photo-camera-input-widget-settings", never, {}, {}, never, never, false, never>;
}
