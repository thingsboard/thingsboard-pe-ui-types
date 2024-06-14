import { TemplateRef } from '@angular/core';
import { WidgetSettings } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PolarAreaChartWidgetSettings } from '@home/components/widget/lib/chart/polar-area-widget.models';
import { LatestChartWidgetSettingsComponent } from '@home/components/widget/lib/settings/chart/latest-chart-widget-settings.component';
import * as i0 from "@angular/core";
export declare class PolarAreaChartWidgetSettingsComponent extends LatestChartWidgetSettingsComponent<PolarAreaChartWidgetSettings> {
    protected store: Store<AppState>;
    protected fb: UntypedFormBuilder;
    polarAreaChartConfigTemplate: TemplateRef<any>;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected defaultLatestChartSettings(): PolarAreaChartWidgetSettings;
    latestChartConfigTemplate(): TemplateRef<any>;
    protected setupLatestChartControls(latestChartWidgetSettingsForm: UntypedFormGroup, settings: WidgetSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PolarAreaChartWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PolarAreaChartWidgetSettingsComponent, "tb-polar-area-chart-widget-settings", never, {}, {}, never, never, false, never>;
}
