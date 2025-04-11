import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class AlarmsTableWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    alarmsTableWidgetSettingsForm: UntypedFormGroup;
    pageStepSizeValues: any[];
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected prepareInputSettings(settings: WidgetSettings): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmsTableWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmsTableWidgetSettingsComponent, "tb-alarms-table-widget-settings", never, {}, {}, never, never, false, never>;
}
