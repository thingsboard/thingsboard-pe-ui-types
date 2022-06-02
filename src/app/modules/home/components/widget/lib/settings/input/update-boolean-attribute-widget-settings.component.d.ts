import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class UpdateBooleanAttributeWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    updateBooleanAttributeWidgetSettingsForm: FormGroup;
    constructor(store: Store<AppState>, fb: FormBuilder);
    protected settingsForm(): FormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateBooleanAttributeWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpdateBooleanAttributeWidgetSettingsComponent, "tb-update-boolean-attribute-widget-settings", never, {}, {}, never, never>;
}
