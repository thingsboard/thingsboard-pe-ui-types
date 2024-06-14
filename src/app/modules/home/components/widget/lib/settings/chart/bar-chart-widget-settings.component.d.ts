import { TemplateRef } from '@angular/core';
import { WidgetSettings } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BarChartWidgetSettings } from '@home/components/widget/lib/chart/bar-chart-widget.models';
import { LatestChartWidgetSettingsComponent } from '@home/components/widget/lib/settings/chart/latest-chart-widget-settings.component';
import * as i0 from "@angular/core";
export declare class BarChartWidgetSettingsComponent extends LatestChartWidgetSettingsComponent<BarChartWidgetSettings> {
    protected store: Store<AppState>;
    protected fb: UntypedFormBuilder;
    barChartConfigTemplate: TemplateRef<any>;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected defaultLatestChartSettings(): BarChartWidgetSettings;
    latestChartConfigTemplate(): TemplateRef<any>;
    protected setupLatestChartControls(latestChartWidgetSettingsForm: UntypedFormGroup, settings: WidgetSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BarChartWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BarChartWidgetSettingsComponent, "tb-bar-chart-widget-settings", never, {}, {}, never, never, false, never>;
}
