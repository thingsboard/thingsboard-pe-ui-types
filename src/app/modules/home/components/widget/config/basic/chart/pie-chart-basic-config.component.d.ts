import { TemplateRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { DataKey } from '@shared/models/widget.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { PieChartWidgetSettings } from '@home/components/widget/lib/chart/pie-chart-widget.models';
import { LatestChartBasicConfigComponent } from '@home/components/widget/config/basic/chart/latest-chart-basic-config.component';
import * as i0 from "@angular/core";
export declare class PieChartBasicConfigComponent extends LatestChartBasicConfigComponent<PieChartWidgetSettings> {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    protected fb: UntypedFormBuilder;
    pieChartConfigTemplate: TemplateRef<any>;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, fb: UntypedFormBuilder);
    protected defaultDataKeys(configData: WidgetConfigComponentData): DataKey[];
    protected defaultSettings(): PieChartWidgetSettings;
    latestChartConfigTemplate(): TemplateRef<any>;
    protected setupLatestChartControls(latestChartWidgetConfigForm: UntypedFormGroup, settings: PieChartWidgetSettings): void;
    protected prepareOutputLatestChartConfig(config: any): void;
    protected latestChartValidatorTriggers(): string[];
    protected updateLatestChartValidators(latestChartWidgetConfigForm: UntypedFormGroup, emitEvent: boolean, trigger?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PieChartBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PieChartBasicConfigComponent, "tb-pie-chart-basic-config", never, {}, {}, never, never, false, never>;
}
