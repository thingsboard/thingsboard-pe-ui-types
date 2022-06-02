import { WidgetSettings } from '@shared/models/widget.models';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AnalogueGaugeWidgetSettingsComponent } from '@home/components/widget/lib/settings/gauge/analogue-gauge-widget-settings.component';
import * as i0 from "@angular/core";
export declare class AnalogueLinearGaugeWidgetSettingsComponent extends AnalogueGaugeWidgetSettingsComponent {
    protected store: Store<AppState>;
    protected fb: FormBuilder;
    gaugeType: string;
    constructor(store: Store<AppState>, fb: FormBuilder);
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnalogueLinearGaugeWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AnalogueLinearGaugeWidgetSettingsComponent, "tb-analogue-linear-gauge-widget-settings", never, {}, {}, never, never>;
}
