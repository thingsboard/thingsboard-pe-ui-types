import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class TimeseriesTableWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    timeseriesTableWidgetSettingsForm: UntypedFormGroup;
    pageStepSizeValues: any[];
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected prepareInputSettings(settings: WidgetSettings): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeseriesTableWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeseriesTableWidgetSettingsComponent, "tb-timeseries-table-widget-settings", never, {}, {}, never, never, false, never>;
}
