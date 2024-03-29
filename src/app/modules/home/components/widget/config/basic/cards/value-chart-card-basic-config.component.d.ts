import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BasicWidgetConfigComponent } from '@home/components/widget/config/widget-config.component.models';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { DataKey, Datasource } from '@shared/models/widget.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import * as i0 from "@angular/core";
export declare class ValueChartCardBasicConfigComponent extends BasicWidgetConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    private fb;
    get datasource(): Datasource;
    valueChartCardLayouts: import("@home/components/widget/lib/cards/value-chart-card-widget.models").ValueChartCardLayout[];
    valueChartCardLayoutTranslationMap: Map<import("@home/components/widget/lib/cards/value-chart-card-widget.models").ValueChartCardLayout, string>;
    valueChartCardLayoutImageMap: Map<import("@home/components/widget/lib/cards/value-chart-card-widget.models").ValueChartCardLayout, string>;
    valueChartCardWidgetConfigForm: UntypedFormGroup;
    valuePreviewFn: any;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected defaultDataKeys(configData: WidgetConfigComponentData): DataKey[];
    protected defaultLatestDataKeys(configData: WidgetConfigComponentData): DataKey[];
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    private updateLatestValues;
    private getCardButtons;
    private setCardButtons;
    private _valuePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValueChartCardBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ValueChartCardBasicConfigComponent, "tb-value-chart-card-basic-config", never, {}, {}, never, never, false, never>;
}
