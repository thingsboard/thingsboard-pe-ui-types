import { TemplateRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { DataKey } from '@shared/models/widget.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { PolarAreaChartWidgetSettings } from '@home/components/widget/lib/chart/polar-area-widget.models';
import { LatestChartBasicConfigComponent } from '@home/components/widget/config/basic/chart/latest-chart-basic-config.component';
import * as i0 from "@angular/core";
export declare class PolarAreaChartBasicConfigComponent extends LatestChartBasicConfigComponent<PolarAreaChartWidgetSettings> {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    protected fb: UntypedFormBuilder;
    polarAreaChartConfigTemplate: TemplateRef<any>;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, fb: UntypedFormBuilder);
    protected defaultDataKeys(configData: WidgetConfigComponentData): DataKey[];
    protected defaultSettings(): PolarAreaChartWidgetSettings;
    latestChartConfigTemplate(): TemplateRef<any>;
    protected setupLatestChartControls(latestChartWidgetConfigForm: UntypedFormGroup, settings: PolarAreaChartWidgetSettings): void;
    protected prepareOutputLatestChartConfig(config: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PolarAreaChartBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PolarAreaChartBasicConfigComponent, "tb-polar-area-chart-basic-config", never, {}, {}, never, never, false, never>;
}
