import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BasicWidgetConfigComponent } from '@home/components/widget/config/widget-config.component.models';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { DataKey, Datasource } from '@shared/models/widget.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { BatteryLevelLayout } from '@home/components/widget/lib/indicator/battery-level-widget.models';
import * as i0 from "@angular/core";
export declare class BatteryLevelBasicConfigComponent extends BasicWidgetConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    private fb;
    get displayTimewindowConfig(): boolean;
    onlyHistoryTimewindow(): boolean;
    batteryLevelLayouts: BatteryLevelLayout[];
    batteryLevelLayoutTranslationMap: Map<BatteryLevelLayout, string>;
    batteryLevelLayoutImageMap: Map<BatteryLevelLayout, string>;
    batteryLevelWidgetConfigForm: UntypedFormGroup;
    valuePreviewFn: any;
    get sectionsCountEnabled(): boolean;
    get datasource(): Datasource;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected defaultDataKeys(configData: WidgetConfigComponentData): DataKey[];
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    private getCardButtons;
    private setCardButtons;
    private _valuePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<BatteryLevelBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BatteryLevelBasicConfigComponent, "tb-battery-level-basic-config", never, {}, {}, never, never, false, never>;
}
