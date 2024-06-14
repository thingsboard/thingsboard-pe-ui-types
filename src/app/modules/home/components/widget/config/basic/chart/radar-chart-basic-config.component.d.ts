import { TemplateRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { DataKey } from '@shared/models/widget.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { RadarChartWidgetSettings } from '@home/components/widget/lib/chart/radar-chart-widget.models';
import { LatestChartBasicConfigComponent } from '@home/components/widget/config/basic/chart/latest-chart-basic-config.component';
import * as i0 from "@angular/core";
export declare class RadarChartBasicConfigComponent extends LatestChartBasicConfigComponent<RadarChartWidgetSettings> {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    protected fb: UntypedFormBuilder;
    radarChartConfigTemplate: TemplateRef<any>;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, fb: UntypedFormBuilder);
    protected defaultDataKeys(configData: WidgetConfigComponentData): DataKey[];
    protected defaultSettings(): RadarChartWidgetSettings;
    latestChartConfigTemplate(): TemplateRef<any>;
    protected setupLatestChartControls(latestChartWidgetConfigForm: UntypedFormGroup, settings: RadarChartWidgetSettings): void;
    protected prepareOutputLatestChartConfig(config: any): void;
    protected latestChartValidatorTriggers(): string[];
    protected updateLatestChartValidators(latestChartWidgetConfigForm: UntypedFormGroup, emitEvent: boolean, trigger?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadarChartBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadarChartBasicConfigComponent, "tb-radar-chart-basic-config", never, {}, {}, never, never, false, never>;
}
