import { TemplateRef } from '@angular/core';
import { WidgetSettings } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PieChartWidgetSettings } from '@home/components/widget/lib/chart/pie-chart-widget.models';
import { LatestChartWidgetSettingsComponent } from '@home/components/widget/lib/settings/chart/latest-chart-widget-settings.component';
import * as i0 from "@angular/core";
export declare class PieChartWidgetSettingsComponent extends LatestChartWidgetSettingsComponent<PieChartWidgetSettings> {
    protected store: Store<AppState>;
    protected fb: UntypedFormBuilder;
    pieChartConfigTemplate: TemplateRef<any>;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected defaultLatestChartSettings(): PieChartWidgetSettings;
    latestChartConfigTemplate(): TemplateRef<any>;
    protected setupLatestChartControls(latestChartWidgetSettingsForm: UntypedFormGroup, settings: WidgetSettings): void;
    protected latestChartValidatorTriggers(): string[];
    protected updateLatestChartValidators(latestChartWidgetSettingsForm: UntypedFormGroup, emitEvent: boolean, trigger?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PieChartWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PieChartWidgetSettingsComponent, "tb-pie-chart-widget-settings", never, {}, {}, never, never, false, never>;
}
