import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class FlotPieKeySettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    flotPieKeySettingsForm: FormGroup;
    constructor(store: Store<AppState>, fb: FormBuilder);
    protected settingsForm(): FormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlotPieKeySettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlotPieKeySettingsComponent, "tb-flot-pie-key-settings", never, {}, {}, never, never>;
}
