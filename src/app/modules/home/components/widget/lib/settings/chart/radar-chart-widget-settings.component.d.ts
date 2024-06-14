import { TemplateRef } from '@angular/core';
import { WidgetSettings } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { RadarChartWidgetSettings } from '@home/components/widget/lib/chart/radar-chart-widget.models';
import { LatestChartWidgetSettingsComponent } from '@home/components/widget/lib/settings/chart/latest-chart-widget-settings.component';
import * as i0 from "@angular/core";
export declare class RadarChartWidgetSettingsComponent extends LatestChartWidgetSettingsComponent<RadarChartWidgetSettings> {
    protected store: Store<AppState>;
    protected fb: UntypedFormBuilder;
    radarChartConfigTemplate: TemplateRef<any>;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected defaultLatestChartSettings(): RadarChartWidgetSettings;
    latestChartConfigTemplate(): TemplateRef<any>;
    protected setupLatestChartControls(latestChartWidgetSettingsForm: UntypedFormGroup, settings: WidgetSettings): void;
    protected latestChartValidatorTriggers(): string[];
    protected updateLatestChartValidators(latestChartWidgetSettingsForm: UntypedFormGroup, emitEvent: boolean, trigger?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadarChartWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadarChartWidgetSettingsComponent, "tb-radar-chart-widget-settings", never, {}, {}, never, never, false, never>;
}
