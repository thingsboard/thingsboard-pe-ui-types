import { UntypedFormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { GaugeBasicConfigComponent } from '@home/components/widget/config/basic/gauge/analog-gauge-basic-config.component';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import * as i0 from "@angular/core";
export declare class ThermometerScaleGaugeBasicConfigComponent extends GaugeBasicConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    protected fb: UntypedFormBuilder;
    gaugeType: string;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, fb: UntypedFormBuilder);
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThermometerScaleGaugeBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThermometerScaleGaugeBasicConfigComponent, "tb-thermometer-scale-gauge-basic-config", never, {}, {}, never, never, false, never>;
}
